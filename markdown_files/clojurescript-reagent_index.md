


# ClojureScript - Reagent

[__Clojure - Ring](/posts/clojure-ringserver/)   
[Quantum Mechanics - Common Sense ___](/posts/quantum-common-sense/)

October 30, 2016

## ClojureScript - Reagent

[Reagent](https://github.com/Reagent-project/Reagent) is a pretty amazing library based off of the facebook library [React.js](https://facebook.github.io/react/) and is a game changer for ClojureScript. If you haven't done much ClojureScript before you might want to check that out first. ClojureScript uses pretty much the same syntax as Clojure expect using the Google Closure Compiler to compile ClojureScript code into JavaScript which is pretty neat. Which means you can write ClojureScript code and the people on your site won't even know it was originally written in ClojureScript.   
  
The best way to get into ClojureScript is taking a look at the [getting started](http://clojurescript.org/guides/quick-start) in the ClojureScript website. You probably don't want to dive stright into Reagent without knowing a bit of ClojureScript since while it is pretty much the same as Clojure there are slight differences that can trick you up if your not careful and going through the tutorial is pretty helpful.   
  
Don't get confused between React and Reagent. I know I did at first but Reagent is the ClojureScript library that is based of the Facebook's JavaScript library for building user interfaces. Also there are other libraries that do the similiar things of Reagent such as Om and there is a few others. However Reagent is said to be pretty good compared to those other ones which are a bit more complicated. Just knowing one will definitely help no need to learn all of them but the idea between all of them is the same. Allowing you to build a dom which allows you to keep state while doing manipulations with state in a container which is the dom.   
  
Reagent shows off a really nice example of UI's you can build right on your browser on their [site](http://Reagent-project.github.io/). Looking at them will help you definitely learn Reagent. I'll also go over certain things that I think is most useful like having timed updates and creating a Reagent atom which is pretty much the same as a Clojure atom in its usage.   
  
To create a new Reagent template which includes [figwheel](https://defunsm.github.io/posts-output/clojure-figwheel/), Reagent, and you can stright off the back push it to your heroku app site.
    
    
    $ lein new reagent newreagentproject
     

Now go ahead and cd into newreagentproject/src. 
    
    
    $ cd ~/newreagentproject/src
     

Unlike other typical lein templates now that we have ClojureScript we have three directories in our src directory. The clj is for clojure files, the cljc is for cljc files which can handle both ClojureScript and Clojure files and the cljs is for ClojureScript files.   
  
For now we aren't really interested in the clj and cljc files but you can fiddle with them if you want but we are really interested in the cljs files. So go ahead and cd into cljs/newreagentproject.   
  

    
    
    $ cd cljs/newreagentproject
     

Now go ahead and open up the core.cljs file in your favorite text editor. Once you open it up you should see the following in the core.cljs
    
    
    (ns newreagentproject.core
        (:require [Reagent.core :as reagent :refer [atom]]
                  [Reagent.session :as session]
                  [secretary.core :as secretary :include-macros true]
                  [accountant.core :as accountant]))
    
    ;; -------------------------
    ;; Views
    
    (defn home-page []
      [:div [:h2 "Welcome to newreagentproject"]
       [:div [:a {:href "/about"} "go to about page"]]])
    
    (defn about-page []
      [:div [:h2 "About newreagentproject"]
       [:div [:a {:href "/"} "go to the home page"]]])
    
    (defn current-page []
      [:div [(session/get :current-page)]])
    
    ;; -------------------------
    ;; Routes
    
    (secretary/defroute "/" []
      (session/put! :current-page #'home-page))
    
    (secretary/defroute "/about" []
      (session/put! :current-page #'about-page))
    
    ;; -------------------------
    ;; Initialize app
    
    (defn mount-root []
      (Reagent/render [current-page] (.getElementById js/document "app")))
    
    (defn init! []
      (accountant/configure-navigation!
        {:nav-handler
         (fn [path]
           (secretary/dispatch! path))
         :path-exists?
         (fn [path]
           (secretary/locate-route path))})
      (accountant/dispatch-current!)
      (mount-root))
     

The section with the functions of home-page, about-page, and current-page are the web pages of the site. If you have used hiccup you'll realize that the web page is made of these brackets which represent a specific html element.   
  
The routing part of the code is dealing with which page is displayed depending on the uri.   
  
The actual initalization of the app happens at init\! as well as where all of the page html elements will be rendered at is done by a Reagent function called reagent/render.   
  
So now lets look at how the site looks by starting lein figwheel from within the newreagentproject directory.
    
    
    $ lein figwheel
     

Once that loads up go to the localhost to open up the site which is usally on http://0.0.0.0:3449/   
  
The great thing about figwheel is you see the changes you make in your code instantly. So lets get started. Lets begin by playing around in the home-page and make your home-page function in the core.cljs file into this.
    
    
    (defn home-page []
        [:div (for [i (range 0 12)]
              [:div (range 0 i)])])
     

![reagent1](https://defunsm.github.io/img/reagent1.png)

Notice now that you have a sequence of numbers being printed starting from 1 and than continuing to go higher and higher and ending at 10. So You can actually use these html elements in for loops to create rather dynamic html elements. The Reagent examples page has an excellent varity of examples of things you can do with reagent to see more complex things. However I'll leave it here and show you some things like how to create new pages.   
  
So to create a new page lets first create a function to represent the new page. So lets call it reagent-page and put it right under the home-page function.
    
    
    (defn reagent-page []
      [:div "Hello new reagent page!"])
     

So now save that but you won't be able to go to the /reagent page just yet. You need to set up the roots for it so put this new route into the routes section right under the other defroutes.
    
    
    (secretary/defroute "/reagent" []
      (session/put! :current-page #'reagent-page))
    

Great but we aren't done yet we need to do one last thing. Go back to the src directory and go into the clj directory and you'll come across a handler.clj and edit it so that your defroutes at the bottom look something like this just adding the /reagent.
    
    
    (defroutes routes
      (GET "/" [] (loading-page))
      (GET "/about" [] (loading-page))
      (GET "/reagent" [] (loading-page)) ;; add this.
    
      (resources "/")
      (not-found "Not Found"))
    

So now that you have seen just a little of what Reagent can do and you can create pages with Reagent you can go and do experiment with it and do some more complicated manipulations with Reagent.

**Tags:** [ClojureScript](/tags/ClojureScript/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Clojure - Ring](/posts/clojure-ringserver/) [Quantum Mechanics - Common Sense __](/posts/quantum-common-sense/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
