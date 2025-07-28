


# Basics of Clojure - Recursion \(Part 3\)

[__Basics of Clojure - Atoms \(Part 4\)](/posts/basics-of-clojurepart4/)   
[Basics of Clojure - Mapping \(Part 2\) ___](/posts/basics-of-clojurepart2/)

September 18, 2016

## Basics of Clojure - Recursion \(Part 3\)

If you're learning clojure chances are this isn't your first language. So you probably have some familiarity with what recursion is.   
  
We will start off with making a simple factorial function to get us started with seeing recursion.
    
    
    (defn factorial [n]  ;; our factorial function accepting one argument
      (if (= n 1)        ;; checks if n is equal to 1 and if so returns 1
        1
        (* n (factorial (dec n)))))  ;; calls the factorial again after decreasing n by 1.
    

Alright now lets see if it works by doing a test.
    
    
    (factorial 3) ;; which we know should be 3x2x1 which is 6. So it works.
    
    ;; 6
    

So lets test the power of our function by doing something larger like 40.
    
    
    (factorial 40) ;; Oh no a StackOverError. What happened?
    

So our function isn't as great as we may think. It won't accept larger numbers.
    
    
    (defn factorial [n] ;; Our factorial function accepts one argument.
      (loop [n n        ;; This is the looping part which sets our argument to n
             sum 1]     ;; Our sum is just one for now.
        (if (= n 0)     ;; If n becomes 0 than return the sum basically ends the loop
          sum
          (recur (dec n) (* sum n)))))  ;; This will continue the loop til the if state is met.
    

Using recur will ensure that you won't run into a StackOverError such as the function before was not taking advantage of recur and thus was not head-tail optimized clojure will do tail-call optimization if you use the recur function. Also if use this function now it'll give you a StackOverError but because you have to set the JVM using -Xss and -XThreadStackSize to set the stack size otherwise you'll still get this error for numbers greater than 20. 

There is an even shorter two line way of doing it using reduce as I showed you previously.
    
    
    (defn factorial [n]
      (reduce * (range 1 (inc n)))) ;; Takes advantage of range making a list of numbers.
    

The second one takes advantage of range since it creates a list of numbers and than reduce multiplies all the numbers that range creates.

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Basics of Clojure - Atoms \(Part 4\)](/posts/basics-of-clojurepart4/) [Basics of Clojure - Mapping \(Part 2\) __](/posts/basics-of-clojurepart2/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
