


# Racket - Intro \(1\)

[__Racket - Intro \(2\)](/posts/racket-intro2/)   
[Clojure - Reading CSV files ___](/posts/clojure-reading-csv/)

March 24, 2017

## Racket - Intro \(1\)

A little guide on Racket. Since I been playing around with it for a while. Pretty cool but doesn't have some of the nice functions that clojure has such as the range but you can easily make it in racket. So here are some things to get familiar with racket.
    
    
    ;; Needed to specify the language.
    (require racket)
    
    ;; Addition similiar to clojure and other lisps
    (+ 2 2)
    
    ;; accepts more than two arguments thats good.
    (+ 2 2 3)
    
    ;; That works too.
    (+ 3 (* 2 2))
    
    ;; What happens when mixing with floats. Oh a float or racket calls them inexact numbers.
    
    (inexact? (+ 3 (* 2.0 2)))
    
    ;; How do we print strings now lets try println. Same as clojure.
    
    (println "Hello")
    
    ;; Do they have format? or something to concat strings? ~a
    (~a "2+2=" (+ 2 2))
    
    ;; How do you define a top level variable in racket?
    (define x 10)
    
    x ;; 10
    
    ;; local variable within a scope.
    ;; Notice that x is 3 in that specific scope not 10.
    (let [(x 3)] x)
    
    ;; just to check that x is actually still globally defined as 10.
    x ;; still 10 cool.
    
    ;; Now how do you make a function? With define as well.
    (define (greetings name)
      (~a "Hello, " name "!"))
    
    (greetings "salman") ;; Yep works.
    
    ;; Oh it doesn't matter if you make them parantheses or brackets.
    
    (define [greetings name]
      (~a "Hello, " name "!"))
    
    (greetings "salman") ;; still works.
    
    ;; What about the lambda functions?
    
    ((lambda (x) (* x x)) 10)
    
    ;; lists? Either way works they have the short hand way and the quote function.
    
    (quote (1 2 3 4))
    
    '(1 2 3 4)
    
    ;; Now how do I map functions to individual elements in a list.
    ;; Oh they have map.
    
    (map (lambda (x) (* x x)) '(1 2 3 4))
    

**Tags:** [Racket](/tags/Racket/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Racket - Intro \(2\)](/posts/racket-intro2/) [Clojure - Reading CSV files __](/posts/clojure-reading-csv/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
