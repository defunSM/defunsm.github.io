


# Haskell - Loading functions into GHCI \(Part 1\)

[__SMChat](/posts/smchat/)   
[Haskell - Introduction ___](/posts/intro-to-haskell/)

September 26, 2016

## Haskell - Loading functions into GHCI \(Part 1\)

The way you identify a file to be haskell code is by adding a _.hs_ tag at the end of the file. So make a file called ex1.hs and open up a _ghci_.   
  
Before we go any further I want to distinguish when I am typing into the _ghci_ which will be identified with the `Prelude>` which means I am telling you to type into the _ghci_. If there is a `$` this means you are typing into your terminal. When there is no `Prelude>` and `$` that means type into whatever text editor you happen to be using onto the ex1.hs file.   
  
Making the ex1.hs using touch. Or however else you may prefer to make a file.
    
    
    $ touch ex1.hs 
    

Open up a ghci. I suggest you get a little familiar with the ghci since you will be spending a bit of time on it and to do that you can type `:?` to view some options for the ghci.
    
    
    $ ghci 
    

Now that you have a ghci up and running lets write some code into ex1.hs and later we can load it into the ghci using :load ex1.hs and afterwards we can use :reload every time we edit ex1.hs. Now lets start with a pythagorean theorem to start off things. If you go back to your middle school and remember that a2 \+ b2 = c2 which is basically what we are going to be writing. In a lot of ways Haskell is very much just like math.
    
    
    {- ################################################
            ex1.hs
            defunSM, Sept 2016.
            Haskell Part 1
    ################################################## -}
    
    pythagorean :: Float -> Float -> Float   {-- Notice that there are two arguments pythagorean is taking a and b. --}
    pythagorean a b = sqrt (a ^ 2 + b ^ 2)  
    

The first line is identifying the type that pythagorean will recieve. In this case it'll recieve two Floats and the out put will be a Float. We do this since Haskell is statically typed and that the function can know before hand what to expect and doing this allows us to reuse our function later on.   
  
Also to have comments you can do curly brackets and a dash like so \{- this is a comment -\}.

So now we can load our function by heading to the ghci which hopefully you still have running if not you can just run ghci again in the same directory of your ex1.hs file and type in the following to load pythagorean into the ghci. Once you used `:load` you can now just use `:reload` and it'll just update the functions you have in your file.
    
    
    Prelude> :load ex1.hs
    

You should see Ok, Modules Loaded: Main. Meaning you're golden and no errors in your code. So now you can type the following to use pythagorean...
    
    
    Prelude> pythagorean 3 4
    

Now lets look at how to construct a factorial which is rather an easy one two liner in haskell.
    
    
    factorial :: Integer -> Integer
    factorial n = if n > 0 then n * factorial (n-1) else 1
    

factorial takes one argument than than checks if it is greater than 0 and if it is than it does n \* factorial \(n-1\) otherwise its 1. This takes advantage of recursion calling itself. Now you can reload the file into ghci using `:reload`. 
    
    
    Prelude> :reload 
    

And use factorial 5 to check that it works.
    
    
    Prelude> factorial 5
    

Now lets look at how to use guards in Haskell which are like conditionals. Lets look at this example of identifying if a quadradic has real roots. If you remember the quadradic equation you might remember that the discriminant is used to determine if a quadradic has real roots. So by using conditions and checking if the discriminant is positive, 0 or negative. Positive being two real numbers, zero being one real number and negative being no real numbers and only imginary roots. a will be the cofficient to the square term, b being the cofficent to the first power and c is the constant.
    
    
    numberOfRoots :: Integer-> Integer-> Integer -> Int
    numberOfRoots a b c
                  | (b ^ 2 > 4 * b * c) = 2    
                  | (b ^ 2 == 4 * b * c) = 1
                  | (b ^ 2 < 4 * b * c) = 0
    

Notice that to use guards each case is started on a new line with the | which is how you state each condition. Guards are very important in Haskell and can allow you to systemically go through and do different manipulations based on the arguments. However sometimes it isn't possible to account for all of the conditions so there in that case you can use otherwise. So you could have written the numberOfRoots function like this. You can check this works out actually in the _ghci_ by giving numberOfRoots three arguments.
    
    
    numberOfRoots :: Integer-> Integer-> Integer -> Int
    numberOfRoots a b c
                  | (b ^ 2 > 4 * b * c) = 2    
                  | (b ^ 2 == 4 * b * c) = 1
                  | otherwise = 0
    

As you may begin to comprend now Haskell allows you to do computational math rather well and probably help you do your math homework I know it has for me.

**Tags:** [Haskell](/tags/Haskell/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__SMChat](/posts/smchat/) [Haskell - Introduction __](/posts/intro-to-haskell/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
