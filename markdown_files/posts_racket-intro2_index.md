


# Racket - Intro \(2\)

  
[Racket - Intro \(1\) ___](/posts/racket-intro/)

March 25, 2017

## Racket - Intro \(2\)

This is continuing off of the previous blog post on racket. Make sure you have gone through that before going to this. In this section we'll cover booleans, conditionals and apply.
    
    
    ;; Booleans
    ;; Racket uses #t and #f for true and false.
    
    (= 2 (+ 1 1))
    (= 2 (+ 1 2))
    
    ;; if statements in racket
    ;; First part is the conditional which is the (= 2 (+ 1 1)) which is #t
    ;; Second part is (println "True") which is the true branch that'll execute if the condition is met.
    ;; Third part (println "False") is the false branch which won't be executed.
    
    (if (= 2 (+ 1 1))
        (println "True")
        (println "False"))
    
    ;; Notice that and will return true if nothing provided.
    ;; and is #t if no arguments provided.
    ;; or is #f is no arguments provided.
    ;; and  will return the argument if only one argument is provided.
    ;; or will do the same if one argument is provided.
    
    (define a 10)
    (define b 5)
    
    (and)
    (and b)
    
    (or)
    (or b)
    
    (and (even? a) (odd? b))
    (and (odd? a) (odd? b))
    (or (odd? a) (odd? b))
    
    ;; Conditionals in racket
    ;; Must start with a bracket to start a conditional.
    ;; Than there is the testing condition and if its met executes.
    
    (cond
      [(positive? n) (println "This number is positive")]
      [(negative? n) (println "This number is negative")])
    
    
    ;; There is also an else if none of the conditionals are met.
    ;; Tells us if the quadradic has 2 roots, 1 root or imaginary roots.
    
    (define (roots a b c)
      (let ([discriminant (- (expt b 2) (* 4 a c))])
        (cond
            [(positive? discriminant) (println "This quadradic has 2 roots")]
            [(negative? discriminant) (println "This quadradic has imaginary roots")]
            [else (println "This quadradic has 1 root")])))
    
    ;; Also note that racket makes a distinction between let and let* like in lisp.
    ;; let won't allow you to use previous bindings as you would sometimes expect.
    ;; let* however does let you use previous bindings.
    ;; First one with let will provide an error because of the difference between let and let*
    ;; You'll find that num is undefined in the first one. Second one works fine.
    
    (let [(num 10)
          (result (+ 2 num))]
      result)
    
    (let* [(num 10)
           (result (+ 2 num))]
      result)
    
    ;; Apply which will distribute the prodecure across the list.
    ;; Notice that the last argument for apply must be a list.
    
    (apply * '(1 2 3 4))
    
    (apply * 1 2 '(3 4))
    
    (apply * 1 2 3 '(4))
    
    (apply * 1 2 3 4) ;; error: contract violation
    

**Tags:** [Racket](/tags/Racket/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[Racket - Intro \(1\) __](/posts/racket-intro/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
