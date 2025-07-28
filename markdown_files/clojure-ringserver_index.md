


# Clojure - Ring

[__Graphics using Quil in Clojure \(Part 4\)](/posts/clojure-using-quil-4/)   
[ClojureScript - Reagent ___](/posts/clojurescript-reagent/)

October 31, 2016

## Clojure - Ring

Starting a web server is easy but prehaps you want to customize the backend to your hearts desire. While most of the handling, routing, middleware and stuff is usually done for you. If you do need to do those backend stuff a good place to start is [Ring](https://github.com/ring-clojure/ring) since it is basically the HTTP web framework for Clojure. Reagent, Compjure all uses Ring.   
Ring is pretty daunting at first but the [wiki](https://github.com/ring-clojure/ring/wiki) goes through step by step. It is pretty important to understand the concepts in order to fully do any kind of backend work. Otherwise you'll be prone to falling into debugging problems.   
So lets start by first starting a new project to get started.
    
    
    $ lein new ringserver
     

Now go ahead to your project.clj in your ringserver directory. Add the \[ring "1.5.0"\]
    
    
    (defproject ringserver "0.1.0-SNAPSHOT"
      :description "FIXME: write description"
      :url "http://example.com/FIXME"
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [ring/ring-core "1.5.0"] ;; add
                     [ring/ring-jetty-adapter "1.5.0"] ;; add
                     ]
      :main ringserver.core)
     

After adding ring as a dependency go ahead and run lein deps to install all the dependencies.
    
    
    $ lein deps
     

Now head over to your src directory and go to your core.clj and edit it to the following.
    
    
    (ns ringserver.core)
    
    (use 'ring.adapter.jetty)
    
    (defn handler [request]
      {:status 200
       :header {"Content-Type" "text/html"}
       :body "Hello World"})
    
    (run-jetty handler {:port 3001})
     

Once you see that the server initalized go ahead and open up a browser to at http://localhost:3001/.   
You should see "Hello World" displayed there.
    
    
    (defproject ringserver "0.1.0-SNAPSHOT"
      :description "FIXME: write description"
      :url "http://example.com/FIXME"
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [ring/ring-core "1.5.0"]
                     [ring/ring-jetty-adapter "1.5.0"]
                     ]
      :main ringserver.core
      :plugins [[lein-ring "0.9.7"]] ;; add
      :ring {:handler ringserver.core/handler}) ;; add
     

So now that you have added the lein ring plugin and lein ring handler location now you can run a server by doing ...
    
    
    $ lein ring server
     

Now you can run lein ring server to start the server.

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Graphics using Quil in Clojure \(Part 4\)](/posts/clojure-using-quil-4/) [ClojureScript - Reagent __](/posts/clojurescript-reagent/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
