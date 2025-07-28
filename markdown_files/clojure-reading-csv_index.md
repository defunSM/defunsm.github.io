


# Clojure - Reading CSV files

[__Racket - Intro \(1\)](/posts/racket-intro/)   
[Clojure - R Squared ___](/posts/clojure-r-squared/)

February 26, 2017

## Clojure - Reading CSV files

Lets have some fun today and analyze some data\! Let us look at the S&P500; which is a index commonly used to see how well the stock market is doing.   
  
We can get the data for the S&P500; from yahoo finances link to that below. Make sure you have the range from Jan 03, 1980 to recent.   
  
[Link to the S&P500; Data from Yahoo Finances](https://finance.yahoo.com/quote/%5EGSPC/history?period1=315723600&period2=1488085200&interval=1d&filter=history&frequency=1d)   
  


Let us go ahead and run a lein project by the following command you can skip this if you already have a project and you can just add incanter to the dependencies.
    
    
    $ lein new incantertut
    

After you have downloaded the cvs file go ahead and rename it to data.csv and move it to the directory where your project.clj is located.   
  
Let us set up our project.clj file to be this so that we have incanter in our project so that we can read csv data and as well as display the data if we decide to do that.
    
    
    (defproject incantertut "0.1.0-SNAPSHOT"
      :description "FIXME: write description"
      :url "http://example.com/FIXME"
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [incanter "1.5.5"]])
    

Now we can move on to the good part and start in our core.clj that in our src directory when creating a lein project.   
  
Go ahead and include the following for the namespaces. If you haven't seen incanter charts yet I recommend going through some of the previous guides I wrote on how to make graphs with incanter but otherwise I'll re-explain it briefly here as well.   
  
[Making Graphs With Incanter](http://salmanhossain.me/posts/clojure-incanter/)   
  

    
    
    (ns incantertut.core
      (:use [incanter.charts :only [histogram scatter-plot pie-chart add-points add-lines xy-plot]]
            [incanter.core :only [view]]
            [incanter.stats :only [sample-normal linear-model]]
            [incanter.io :only [read-dataset]])
      (:require [clj-time.core :as tc]
                [clj-time.periodic :as tp]
                [clj-time.coerce :as tco]))
    

So the only new addition here will be the incanter.io which will allow us to read csv files\!  
  
Now to the good stuff. Add the following underneath the namespace in your core.clj file.
    
    
    (def data (read-dataset "data.csv" :header true))
    

Now you can view all of the data using the following. Be warned that this is around 30+ years of data so it could take a while for the data to appear. 
    
    
    (:rows data)
    

However that just shows you the entire data what if we are only interested in the opening price of the stock? Well we can use map :Open to find all the opening prices.
    
    
    (map :Open (:rows data))
    

That will result in all the opening prices of the S&P500.; Now lets say we want to view it we can do that using the view and xy-plot from incanter to do just that. However before that notice that when we do map :Open to the data it will return the opening prices from most recent to least recent. That is not what we want since incanter xy-plot takes least recent to most recent. So we need to use reverse to fix that. So we'll just create a function to do that.
    
    
    (defn view-data [selection data]
      (let [sel-data (reverse (map selection (:rows data)))
            counter (count sel-data)]
        (view (xy-plot (range counter) sel-data))))
        
    (view-data :Open data)
    

Now running that should produce the following pretty graph below.  
  
![cvspic](https://defunsm.github.io/img/csvpic.png)  
  
That is about it you can fix it up a bit by using a time-series instead so that instead of numbers on the bottom you have dates. As well as overlapping it with close prices too. Prehaps in another blog post. 

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Racket - Intro \(1\)](/posts/racket-intro/) [Clojure - R Squared __](/posts/clojure-r-squared/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
