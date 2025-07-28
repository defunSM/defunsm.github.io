


# Graphics using Quil in Clojure \(Part 4\)

[__Clojure - How to start a web app using Heroku](/posts/Heroku/)   
[Clojure - Ring ___](/posts/clojure-ringserver/)

November 5, 2016

## Graphics using Quil in Clojure \(Part 4\)

Once you have created something using quil the natural thing is to display it right? Doing that is easy if you follow the steps. There are some pitfalls you have to becareful of getting into. The best place to see how to include quil into the browser is the [quil wiki](https://github.com/quil/quil/wiki/ClojureScript).   
  
The guide shows you how to start a browser with the quil applet. I'll go through how to incorporate the quil applet in a reagent template which is pretty much the same thing expect it can be a bit confusing on where exactly to place the defsketch macro.   
  
To start a reagent template go ahead and type the following...
    
    
    $ lein new reagent quilreagent
     

The first thing to do is to add quil as a dependency in the project.clj so lets do that.
    
    
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [ring-server "0.4.0"]
                     [reagent "0.6.0"]
                     [reagent-forms "0.5.25"]
                     [reagent-utils "0.2.0"]
                     [ring "1.5.0"]
                     [ring/ring-defaults "0.2.1"]
                     [compojure "1.5.1"]
                     [hiccup "1.0.5"]
                     [yogthos/config "0.8"]
                     [org.clojure/clojurescript "1.9.229"
                      :scope "provided"]
                     [secretary "1.2.3"]
                     [venantius/accountant "0.1.7"
                      :exclusions [org.clojure/tools.reader]]
                     [quil "2.4.0"]] ;; add quil as a dependency
     

That is what your :dependencies should look like now just add quil as a dependency at the bottom. Now that is done. Go to the core.cljs file in your src directory. Open it up and lets add quil in the required place as q and the macros needed as well. So your name space should look like this.
    
    
    (ns quilreagent.core
        (:require [reagent.core :as reagent :refer [atom]]
                  [reagent.session :as session]
                  [secretary.core :as secretary :include-macros true]
                  [accountant.core :as accountant]
                  [quil.core :as q :include-macros true] ;; add this
                  [quil.middleware :as m])) ;; as well as this
     

As well as add all of the code needed for quil for now we'll use the basic quil example. So add all of this right after the name space.
    
    
    (defn setup []
      ; Set frame rate to 30 frames per second.
      (q/frame-rate 30)
      ; Set color mode to HSB (HSV) instead of default RGB.
      (q/color-mode :hsb)
      ; setup function returns initial state. It contains
      ; circle color and position.
      {:color 0
       :angle 0})
    
    (defn update-state [state]
      ; Update sketch state by changing circle color and position.
      {:color (mod (+ (:color state) 0.7) 255)
       :angle (+ (:angle state) 0.1)})
    
    (defn draw-state [state]
      ; Clear the sketch by filling it with light-grey color.
      (q/background 240)
      ; Set circle color.
      (q/fill (:color state) 255 255)
      ; Calculate x and y coordinates of the circle.
      (let [angle (:angle state)
            x (* 150 (q/cos angle))
            y (* 150 (q/sin angle))]
        ; Move origin point to the center of the sketch.
        (q/with-translation [(/ (q/width) 2)
                             (/ (q/height) 2)]
          ; Draw the circle.
          (q/ellipse x y 100 100))))
    
    (q/defsketch example-quil
      :host "example-quil"
      :size [500 500]
      ; setup function called only once, during sketch initialization.
      :setup setup
      ; update-state is called on each iteration before draw-state.
      :update update-state
      :draw draw-state
      ; This sketch uses functional-mode middleware.
      ; Check quil wiki for more info about middlewares and particularly
      ; fun-mode.
      :middleware [m/fun-mode])
     

Note that the :host has to be specified in order for the canvas to know what applet to sketch. So now that you have the quil code in the core.cljs now you have to add it to the home-page which you can do by editing home-page to the following.
    
    
    (defn home-page []
      [:div [:h2 "Welcome to quilreagent"]
       [:div [:a {:href "/about"} "go to about page"]]
       [:canvas#example-quil]]) ;; add this part.
     

Now run figwheel and that should be it.   
  
Note that the \# is used to represent the host id which is example-quil in this case. If it were something else than you would have to replace it with that something else instead of example-quil. You may need to reload the page manually before the applet shows on the browser. Once you do that it'll show a circle spinning around which is exactly what we wanted. Thats pretty much it and if you don't like to have all the quil code in the core.cljs you can have it in another namespace so it is more condensed and neat. In case you want to see the full code the below is the full code of what the core.cljs should look like.
    
    
    (ns quilreagent.core
        (:require [reagent.core :as reagent :refer [atom]]
                  [reagent.session :as session]
                  [secretary.core :as secretary :include-macros true]
                  [accountant.core :as accountant]
                  [quil.core :as q :include-macros true] ;; add this
                  [quil.middleware :as m])) ;; as well as this
    
    
    (defn setup []
      ; Set frame rate to 30 frames per second.
      (q/frame-rate 30)
      ; Set color mode to HSB (HSV) instead of default RGB.
      (q/color-mode :hsb)
      ; setup function returns initial state. It contains
      ; circle color and position.
      {:color 0
       :angle 0})
    
    (defn update-state [state]
      ; Update sketch state by changing circle color and position.
      {:color (mod (+ (:color state) 0.7) 255)
       :angle (+ (:angle state) 0.1)})
    
    (defn draw-state [state]
      ; Clear the sketch by filling it with light-grey color.
      (q/background 240)
      ; Set circle color.
      (q/fill (:color state) 255 255)
      ; Calculate x and y coordinates of the circle.
      (let [angle (:angle state)
            x (* 150 (q/cos angle))
            y (* 150 (q/sin angle))]
        ; Move origin point to the center of the sketch.
        (q/with-translation [(/ (q/width) 2)
                             (/ (q/height) 2)]
          ; Draw the circle.
          (q/ellipse x y 100 100))))
    
    (q/defsketch example-quil
      :host "example-quil"
      :size [500 500]
      ; setup function called only once, during sketch initialization.
      :setup setup
      ; update-state is called on each iteration before draw-state.
      :update update-state
      :draw draw-state
      ; This sketch uses functional-mode middleware.
      ; Check quil wiki for more info about middlewares and particularly
      ; fun-mode.
      :middleware [m/fun-mode])
    
    ;; -------------------------
    ;; Views
    
    
    
    (defn home-page []
      [:div [:h2 "Welcome to quilreagent"]
       [:div [:a {:href "/about"} "go to about page"]]
       [:canvas#example-quil]]) ;; add the canvas in the home-page
    
    (defn about-page []
      [:div [:h2 "About quilreagent"]
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
      (reagent/render [current-page] (.getElementById js/document "app")))
    
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
     

**Tags:** [Graphics](/tags/Graphics/) [Clojure](/tags/Clojure/) [Code](/tags/Code/)

[__Clojure - How to start a web app using Heroku](/posts/Heroku/) [Clojure - Ring __](/posts/clojure-ringserver/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
