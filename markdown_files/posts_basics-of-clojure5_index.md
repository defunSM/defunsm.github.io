


# Basics of Clojure - Watching an Atom \(Part 5\)

[__Graphics using Quil in Clojure \(Part 3\)](/posts/Using_swingpart3/)   
[Basics of Clojure - Atoms \(Part 4\) ___](/posts/basics-of-clojurepart4/)

September 21, 2016

## Basics of Clojure - Watching an Atom \(Part 5\)

Watching an Atom is exactly what it sounds like. Adding a Watch on an Atom keeps track of your atom and monitors them and when a specific condition is met it will trigger some function and alert you to the change.   
  
Lets say we have our player that starts off with 100 health and when he reaches zero health we want to be notified that the game is over. The way we would go about this is first by creating an atom for the player. We already learned this in part 4.
    
    
    (def player (atom {:hp 100})) ;; creates the player health at 100.
    

Now we need a function that will lower the health of the player. We'll call this player-damage.
    
    
    (defn player-damage [val]
      (swap! player update-in [:hp] - val)) ;; lowers the health of the player.
    

Now that we have a way to lower the player's health we can now monitor the atom as we change the player's health. The new part where we create a watch for out atom. This is done by the add-watch function.
    
    
    (defn watch-health [key watch old new]  ;; contains the old state and the new state.
      (let [hp (:hp new)]
          (if (= 0 hp)
        (println "You are now dead")   ;; prints this if hp is equal to 0.
        (println "You are at" hp "health"))))   ;; prints this if not 0.
        
    (add-watch player :health watch-health)  ;; watch-health is the function used to monitor the player health.    
    

Now we can check if the atom is actually being watched.
    
    
    (player-damage 50) ;; now if you call this you'll see the hp being printed and than the second time it'll be zero and it'll drop into the negative healths.
    

Now the atom being monitored and we are notified when the health is dropped to 0. This can have all kinds of implementations that require watching a value drop or increase to a specific value and than a certain action being applied in this cause we only printed but we could do anything from programming things like automatically turning on an air conditioner if the temperature is a certain amount in the room or can watch for a specific time and alert you to something u have to do at that time. There is a wide varity of things that can be done with watch and is an extremely important feature.

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Graphics using Quil in Clojure \(Part 3\)](/posts/Using_swingpart3/) [Basics of Clojure - Atoms \(Part 4\) __](/posts/basics-of-clojurepart4/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
