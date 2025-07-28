


# Clojure - Probabilities

[__Clojure - Shell Commands](/posts/clojure-reading-writing/)   
[Python - Lists ___](/posts/pythonlists/)

October 22, 2016

## Clojure - Probabilities

So I wrote a Python program that allows you to roll two dice and it will tell you the probabilitiy of obtaining a specific sum with those two dice. I found that writing it in clojure was so much more concise than in Python. Prehaps it is because I already wrote it in Python but the code itself in Clojure is shorter and it could even be shorter with some adjustments. When writing it in Python pretty much worked like a charm and there was functions to do everything already so considering that Clojure still ended up shorter with 30 lines of code while the Python code is 48 lines. I do think that the Python code could be adjusted to be shorter as well but it is pretty amazing that Clojure code can be written to do the same thing as Python which is extremely idiomatic.   
  
This is the Clojure code below: 
    
    
    (ns dice.core)
    
    (defn create-dice [low high]
      (for [i (range low high)]
        (map (fn [b] (+ i b)) (range low high))))
    
    (defn outcome [arg]
      (reduce + (for [i arg]
                  (count i))))
    
    (defn count-occurrences [s list]
      (count (filter #{s} (flatten list))))
    
    (defn percentage [min max dice outcome]
      (for [x (range min (+ max 1))]
        (println x "           " (count-occurrences x dice) "               " (format "%.4f" (* 100 (float (/ (count-occurrences x dice) outcome)))) "%")))
    
    (defn stats [low high]
      (let [dice-pos (create-dice low high)
            outcome (outcome dice-pos)
            max (apply max (flatten dice-pos))
            min (apply min (flatten dice-pos))]
          (println "\n\nDice Possibilities: " dice-pos "\n\n")
          (println "Total Number of Possibilities: " outcome)
          (println "The Max Sum: " max)
          (println "The Min Sum: " min "\n\n")
          (println "Sum:    #ofPossibilities:    Percentage %:")
          (percentage min max (flatten dice-pos) outcome)))
    
    (stats 1 7)
    

One of the great things about Clojure is that performing mathmatical calculations feels so natural which is probably because of drawing from haskell. Its range, max, min functions go so well with apply along with using map to display all the sums in three lines.  
  
Creating all the sum possibilities is rather easy using the range which creates the original list of \(1 2 3 4 5 6\) and than the map adds each element to all of the elements in the second list which is the same as the first list created in the for binding loop. 
    
    
    (defn create-dice [low high]
      (for [i (range low high)]
        (map (fn [b] (+ i b)) (range low high))))
    

To demonstrate this a little more graphically on what exactly is going on in this you can think of it like this where each element of the first list is being added to all of the elements in the second list and than moving on to the second element in the first list and than adding it to all the elements in the second list until all the elements in the first list are used up.![mapping in clojure](https://defunsm.github.io/img/prob1.png)

Next we want to figure out how many elements there are or how many outcomes there can be when using two dice. We can use the count function to do this. However just using count will give us 6 since it only accounts for the lists which are elements. But we want the elements within those lists. This is where the function defination outcome comes into play which uses a for loop.
    
    
    (defn outcome [arg]
      (reduce + (for [i arg]
                  (count i))))
     

The argument that outcome will take the the list produced by the create-dice function and will count the amount of elements in each list. Since the list is from 1 to 6 that should give us 6 in each list. There is 6 lists with 6 elements in each so thus a total of 36 is produced using the outcome function. Why do we need the total amount of elements in the list? Well this is because to find probability we need to do the occurances of each sum over the total number of outcomes.   
  
Which leads to the next function since we have the total number of outcomes we now need a function that will give us the number of occurances for each sum which we can do in a two liner rather easily using filter, count and flatten.
    
    
    (defn count-occurrences [s list]
      (count (filter #{s} (flatten list))))
     

First let me talk about flatten and what it is doing to the list that will be given as an argument to the count-occurrences. Right now our sum possibilities list contains 6 lists within a list. In order to filter through that we need just a list of all the elements in the 6 lists. So in order to have just one list instead of having 6 lists within a list we use flatten. After flattening all the lists into one retaining all the elements in each one we can now use filter which takes a regex expression. In this case the regex expression is an argument that count-occurrences will take. In the next function you'll see how everything is put together and all the functions are used to display the final result.
    
    
    (defn percentage [min max dice outcome]
      (for [x (range min (+ max 1))]
        (println x "           " (count-occurrences x dice) "               " (format "%.4f" (* 100 (float (/ (count-occurrences x dice) outcome)))) "%")))
    

First yes I realize that the println section is hideous to look at with those long spaces. But I wasn't really focused as making the code appear nice as just to display the results in a sensible format. In the end we get this insanely long println line.  
  
Anyways lets get into this function and how it brings everything together. First min and max are two arguments that this function will take. As you may figure this is the min and max of the list of possibilities which you'll see is a easy one liner to get the max and min of a list using guess what max and min which are functions already defined in clojure. The dice and outcome are exactly that asking for the list of possibilities and the outcome so that it can calculate the probabilitiy and print it.  
  
We have a for loop given to us based on the max and min values to display the percentage of each of the sum's one by one. The insanely long println line is using count-occurrences which was defined previously and taking the element from the list created in the range as an argument and the list of possibilities as the second argument. Format is being used for 4 significant figures after the decimal place. There is a whole lot of other math that also goes in such as multiplying it after getting the result of the possibility to make it into a percentage.
    
    
    (defn stats [low high]
      (let [dice-pos (create-dice low high)
            outcome (outcome dice-pos)
            max (apply max (flatten dice-pos))
            min (apply min (flatten dice-pos))]
          (println "\n\nDice Possibilities: " dice-pos "\n\n")
          (println "Total Number of Possibilities: " outcome)
          (println "The Max Sum: " max)
          (println "The Min Sum: " min "\n\n")
          (println "Sum:    #ofPossibilities:    Percentage %:")
          (percentage min max (flatten dice-pos) outcome)))
    

Finally you have stats which calls all of the functions which we just defined and prints a bunch of other information.  
  
First lets talk about the arguments that stats is taking which is low and high. This is given to stats to determine what is the highest and lowest value that the dice can roll. In this case we use 1 and 7 because we want a list that goes from 1 to 6.   
  
Moving on we let which binds dice-pos to all the possibilities that can occur. Outcome which is binded to the number of outcomes that can happen in the dice-pos. Max and min which is a easy one liner using apply min or max to the flattened list of possibilities.  
  
After the let bindings its all just printing the information for the user. At the end we call the percentage function which does all the real work combining all the functions we have used before and displays the actual information that we want to see and displays a nice percentage of each sum. 

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Clojure - Shell Commands](/posts/clojure-reading-writing/) [Python - Lists __](/posts/pythonlists/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
