


# Basics of Clojure - Atoms \(Part 4\)

[__Basics of Clojure - Watching an Atom \(Part 5\)](/posts/basics-of-clojure5/)   
[Basics of Clojure - Recursion \(Part 3\) ___](/posts/basics-of-clojurepart3/)

September 20, 2016

## Basics of Clojure - Atoms \(Part 4\)

This is like the fun part where you can now begin to model databases using atoms. Atoms are used a whole lot in clojure and are particularly useful so make sure you know them well. Here I'm just going to provide a brief outline of what atoms can do without explaining what atoms are actually which is a whole another conversation.   
  
Let me introduce to you the atom data structure.
    
    
    (type (atom {})) ;; This is an atom. 
    

Also the persistant Array Map which is another data structure in clojure. Typically we don't use vectors when using atoms. 
    
    
    (type {}) ;; Using {} is a persistantArrayMap in other languages this can be thought of as hashes. 
    

Now that you are familiar with the data structures that will be presented lets use atoms and persistantArrayMaps to create a var called stats that will contain two values which will be health points and gold. We can do this by the following...
    
    
    (def stats (atom {:hp 100 :gold 0})) ;; How to create an atom in clojure. The :hp and :gold are key-words that can be used to look up the values later on.
    
    (println @stats) ;; This shows the value of stats. Notice that you have to add the @ to show the value of stats. This is called dereferencing an atom.
    
    (println (:hp @stats)) ;; This will show you the value for hp which is 100. key-words are useful to look up specific values.
    

Now that you can somewhat view and make atoms how would you go about updating stats with a new value? We do this with swap\!
    
    
    (swap! stats assoc :hp 13) ;; Now you have changed the hp value in stats
    
    (println @stats) ;; You can check that the value of stats changed to 13
    

Now what if you want to increase or decrease one of the values without changing to a specific number?
    
    
    (defn gold-inc []
      (swap! stats update-in [:gold] + 1)) ;; using update-in will increase the gold value by 1 every time it is called.
    
    (println @stats) ;; You can now see the the gold as increased by the number of times the previous swap! was called.  
    

You can also write the same gold-inc function using just a function in swap.
    
    
    (defn gold-inc []
      (swap! stats update-in [:gold] inc)) ;; We replaced the + 1 with an existing clojure library function inc which increases the argument by 1.
    

What if we want a general function that will allow us to increase or decrease a specific value of stats we want. We can write a function called change-by.
    
    
    (defn change-by [key val]
      (swap! stats update-in [(keyword key)] + val)) ;; something new is the keyword function that converts a string into a keyword.
      
    (change-by "gold" 4) ;; Increase the gold value by 4.  
      
    (println @stats) ;; you can now check that your value has changed for gold.  
    
    (change-by "hp" -5) ;; Decreases the hp value by 5.
    

One last thing to add is if you want to reset the entire atom. 
    
    
    (reset! stats {:hp 100 :gold 0}) ;; this will set the value of stats to {:hp 100 :gold 0} 
    

Now you have everything you need to make your own little RPG text games\!

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Basics of Clojure - Watching an Atom \(Part 5\)](/posts/basics-of-clojure5/) [Basics of Clojure - Recursion \(Part 3\) __](/posts/basics-of-clojurepart3/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
