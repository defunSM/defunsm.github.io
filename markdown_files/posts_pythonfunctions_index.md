


# Python - Functions

[__Python - Recursion](/posts/pythonloops/)   
[Python - User input ___](/posts/pythonuserinput/)

October 11, 2016

## Python - Functions

So as you been writing python code you may see me typing things such as this every time at the beginning of any file.
    
    
    def main():
          
          # some kind of code here in the body.
            
    main()        
    

In python "def" is the keyword that is used to create a function defination. Following after the keyword is of course the function name. So the syntax for creating a general function is such.
    
    
    def functionName(arg1, arg2):
    

arg1 and arg2 are the arguments passed to the function. These arguments can be variables from other functions, strings, values, later on you'll see lists and hashes. To demonstrate a function lets write a function that'll help us do some math. Lets say we want to find the hypothenuse given the legs of the triangle. We could define a function called "hypothenuse" than pass the arguments to the function.
    
    
    import sys, math
    
    def hypothenuse(a, b):
    
        return math.sqrt(float(a) ** 2 + float(b) ** 2)
    
    def main():
    
        print(hypothenuse(sys.argv[1], sys.argv[2]))
    
    main()
    

First we are importing sys and math which we will both need their libraries to write the hypothenuse function. Since from the pythagorean theorem we know that a ^ 2 + b ^ 2 = c ^ 2 so c = sqrt\(a ^ 2 + b ^ 2\). So our function hypothenuse will do something like that in it's body.  
  
Something new that you are seeing is the return and as the name suggests it is returning the value calculated by the hypothenuse function.  
  
If you are coming from C++ you know that every function has a return but in python that is not the case. In the main function we have the hypothenuse function given the sys.argv\[1\] as an argument for a and sys.argv\[2\] as the argument for b. The Hypothenuse function will then use the arguments recieved from the terminal and than preform the pythagorean theorem and boom returns a value which then print will print it to the standard output to your terminal.  
  
So to check that works this is what you should type into your terminal in my case I called my file hypothenuse.py but you use whatever you called your file.
    
    
    $ python3 hypothenuse.py 3 4
    

The result is ...
    
    
    5.0
    

So we could see that the hypothenuse function is returning back it's value and then print is printing it out to display to us the value.  
  
Wraping up:  
  
Thats all there is too it not too complicated. Just make sure to give your function name reasonable names and have meaning to them otherwise when you begin to write a lot of code and need to know what a function does you don't want go through reading the code in that function so having the function name relatable to what it's doing is important. As well as making sure your passing it the right kind of arguments. Make sure that if it wants a string to pass it a string and if the function wants a number pass it a number. In this case we don't have to worry about that since float will just convert it but in other cases you may need to consider it. As well as passing it the right number of arguments. If you passed hypothenuse three arguments instead of two it would give you a typeError that hypothenuse only takes 2 positional arguments but 3 were given. This is because the function will not know what to do with the extra function so you need to keep in mind when writing a function and than using that function how many arguments it will take. There are also ways to write functions take take any number of arguments which I'll show you later on. 

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - Recursion](/posts/pythonloops/) [Python - User input __](/posts/pythonuserinput/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
