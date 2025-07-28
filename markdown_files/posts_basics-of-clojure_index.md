


# Basics of Clojure \(Part 1\)

[__Basics of Clojure - Mapping \(Part 2\)](/posts/basics-of-clojurepart2/)   
[Terminals and Shell Commands ___](/posts/terminalshell/)

September 11, 2016

## Basics of Clojure \(Part 1\)

Hello world is kind of the basic thing to start off with in any kind of programming language so we'll start with that. So open up your favorite text editor that has clojure preferably emacs or vim. Type out the following code. First start a nrepl in your text editor. Type the following into the repl.
    
    
    (println "Hello World") ;; displays hello world in the repl.
    
    ;; "Hello World"
    

Now that you have done the hello world lets look at addition, subtraction, multiplication, and division.
    
    
    (+ 2 3) ;; same as doing 2 + 3
    
    ;; 5
    
    (- 2 3) ;; same as doing 2 - 3
    
    ;; -1
    
    (* 2 3) ;; same as doing 2 * 3
    
    ;; 6
    
    (/ 2 3) ;; same as doing 2 / 3 notice that the result is displayed in a fraction try doing (float (/ 2 3)).
    
    ;; 2/3
    
    

Notice that the operand is _after_ the operator. This is polish notation which is used in lisp dialects. This way doing 2 + 2 + 2 is easier since you won't have to repeat the + operator \(+ 2 2 2\). You can think of the applying the addition to all of the things in the parantheses. At first you might wonder whats the point of doing it like that instead of just doing \(2 + 2\) which will give you an error.
    
    
    (def five 5) ;; binds the symbol five to the number 5. Creating a global variable.
    
    (+ 2 five) ;; same thing as doing (+ 2 5) since five is binded to 5.
    
    ;; 7
    

Using def is how you can create variables and I'll show you now how to make functions.
    
    
    ((fn [x] (* x x)) 5) ;; as you can see the fn is how you start the function and than it takes one input the x and than does whatever is in the parantheses.
    
    ;; 25
    
    (def square (fn [x] (* x x))) ;; this is the same thing as before but now we are binding the function to the symbol square. So we can use it else where without typing the function again.
    
    (square 5) ;; same result of 25.
    
    ;; 25
    
    (defn square [x] (* x x)) ;; this creates the function and notice how we don't use fn anymore.
    
    (square 5) ;; results are the same so now you have 3 different ways to produce the same result.
    
    ;; 25
    

A quick useful example of using functions is making a function that calculates the hypothenuse given both legs a and b.
    
    
    (defn find-hypothenuse [a b] (Math/sqrt (+ (* a a) (* b b)))) ;; this is making our function basically using the pythagorean theorem a^2 + b^2 = c^2.
    
    (find-hypothenuse 3 4) ;; if you know your pythagorean triples you know easily this is 5 which is what the result gives us.
    
    ;; 5.0  
    

That is about it for now as you can see you can make some useful things out of these functions and get them to work for you rather easily. Be careful when using def and defn since sometimes it is confusing to realize the subtle difference between them. 

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Basics of Clojure - Mapping \(Part 2\)](/posts/basics-of-clojurepart2/) [Terminals and Shell Commands __](/posts/terminalshell/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
