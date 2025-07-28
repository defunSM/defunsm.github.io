


# Clojure File to Standalone Jar

[__Creating an Exechuteable GUI](/posts/2016-08-29-Clojure_GUI_as_an_Exe/)   
[A New Beginning ___](/posts/2016-08-27-new/)

August 28, 2016

## Clojure File to Standalone Jar

Clojure luckily relies on the JVM and thus it is easy to turn a .clj into a .jar with relative ease. Of course there are some things you have to watch out for such as making sure that the -main function contains everything and nothing is in the top level that's supposed to be in the -main function.   
  
So start with the basics start a leiningen project running the following...
    
    
    $ lein new defunsmproject
    

This will create a new leiningen project which now means you should have a project.clj file. That looks something like this.
    
    
    (defproject defunsmproject "0.1.0-SNAPSHOT"
      :description "FIXME: write description"
      :url "http://example.com/FIXME"
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :dependencies [[org.clojure/clojure "1.8.0"]])
    

Your core.clj should look like this which is located in the src directory of the leiningen project directory. 
    
    
    (ns defunsmproject.core)
    
    (defn foo
      "I don't do a whole lot."
      [x]
      (println x "Hello, World!"))
    

Step 1:   
  
Edit project.clj so that leiningen knows which one is your -main function. In this cause it would be defunsmproject.core.   
  
As well as adding :profiles telling leiningen how to build the jar file.
    
    
    (defproject defunsmproject "0.1.0-SNAPSHOT"
      :description "FIXME: write description"
      :url "http://example.com/FIXME"
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :dependencies [[org.clojure/clojure "1.8.0"]]
      :profiles {:uberjar {:aot [defunsmproject.core]}} ;; add this
      :jar-name "defunsmproject.jar" ;; add this
      :uberjar-name "defunsmproject-uber.jar" ;; add this
      :main defunsmproject.core) ;; add this
    

Step 2:   
  
Add :gen-class and -main function in the core.clj.
    
    
    (ns defunsmproject.core
      (:gen-class)) ;; add this gen-class
    
    (defn -main [& args]  ;; add this -main function
      (println "Converting a clojure file to a standalone jar!"))
    

Step 3:   
  
Now you can make a uberjar which is the standalone jar by running ...
    
    
    $ lein uberjar
    

If that worked than your in good luck and should have a uber-jar and a jar. The standalone one that you probably want is the uber-jar one which will be in the the target directory that was generated.   
  
To run the jar file do the following. And you should see the output as expected.   
  

    
    
    $ java -jar defunsmproject-uber.jar
     

If you run into problems make sure that your project.clj and core.clj is set up just like mine. Otherwise you now have a .jar file from a .clj file\!

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Creating an Exechuteable GUI](/posts/2016-08-29-Clojure_GUI_as_an_Exe/) [A New Beginning __](/posts/2016-08-27-new/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
