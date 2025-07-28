


# Python - User input

[__Python - Functions](/posts/pythonfunctions/)   
[Python - If-else-statements ___](/posts/pythonifstatements/)

October 10, 2016

## Python - User input

In this section we'll learn all about user input. How we can get our code to prompt the user for some information and than do something with that information. This is a pretty useful thing to do since usually we want to collect some kind of user data and manipulate it in some way. So lets say we want to do some math and return the sin of whatever the user inputs. We would first need to import math into our code since we need to use math.sin\(\) and also using input\(\) which is how you ask for user input from the user.
    
    
    import math
    
    def main():
    
        user_input = input("> ")
        answer = math.sin(user_input)
        print(answer)
    
    main()
     

Once you run that you'll quickly realize that something went wrong. Oh no. You get an error TypeError that a float is required on line 6. So what is going on here? Well math.sin needs a float as an argument. Otherwise it can't do its operations. We'll learn more about functions and how they take arguments soon enough but note that when we use input\(\) the variable user\_input stores the input that the user writes as a STRING and NOT a INTEGER. Thus we need to convert the user input to a float. Luckily Python is rather convinent and has a function to do just that that you have seen before float\(\). You can use float\(\) on a string to convert it into a float and there is another function called int\(\) that will convert your string or number to a integer.
    
    
    float("5") => 5.0
    
    int("5") => 5
     

So add the user\_input as an argument of float like so.
    
    
    import math
    
    def main():
    
        user_input = input("> ")
        answer = math.sin(float(user_input))
        print(answer)
    
    main()
    

Notice that to give a function an argument you place a variable, string, number or anything else into the parantheses that come after it. You may wonder about why you need to use a period to call the function sin because it imported from the math library and using the function from there and hence you use the period to indicate that and otherwise you would get an error without including the math part and wouldn't know where the function sin is coming from thinking you have written your own sin function. Now run the code and you shouldn't get an error this time.  
  
The result is that you get a prompt like the following below:
    
    
    > 
    

Which you can enter a number which math.sin and thus pops out a decimal. However you may notice that it does radians instead of degrees. If that annoys you than theres an easy fix to convert the answer into degrees using math.radians\(\). Just give the answer produced by float\(user\_input\) to math.radians\(\) and it will do the conversation for you so you can type in degrees.
    
    
    answer = math.sin(math.radians(float(user_input)))
    

We could also get userinput stright from the command line by rewriting out code a little bit and importing sys. Which allows you to take in arguments from the command and do a whole lot of more system related stuff. We can also get rid of our userinput and clean it up to be the following ...
    
    
    import sys
    import math
    
    def main():
    
        answer = math.sin(math.radians(float(sys.argv[1])))
        print(answer)
    
    main()
    

If you run that with the following...
    
    
    $ python3 yourfile.py 
    

You will get an IndexError and says that list index is out of range? Well this is because now that you have used sys.argv\[1\] but you didnt give an argument when running the file. sys.argv takes arguments from your command line so when it doesn't recieve one it'll throw you an error. We'll learn more about catching these errors and managing them with try and except. As well as other things about error handling. So the right way to run the file now is to add the number you want the sin of in your command line as an argument to python3 like so ...
    
    
    $ python3 yourfile.py 90
    

The result of this is the following...
    
    
    1.0
    

As expected the sin of 90 is 1 and you have your expected result. Now you have a python file that does sin which is rather since but what if you want both sin and cos? How would you do that? Well there is a few ways we could use if-statements which is the way we are going to do it or we could just show both results. But we are going to do the if-statement way and make a nice little way that the user can enter either cos or sin followed by the number they want to find the sin or cos of. This can easily be done using if-statements which you learned about and changing your code to the following...
    
    
    import sys
    import math
    
    def main():
    
        if (sys.argv[1] == "sin"):
            answer = math.sin(math.radians(float(sys.argv[2])))
            print(answer)
        elif (sys.argv[1] == "cos"):
            answer = math.cos(math.radians(float(sys.argv[2])))
            print(answer)
        else:
            print("Don't know what to do with ", sys.argv[1])
    
    main()
    

Now that you added sys.argv\[2\] pyton will be expecting another argument. So to run the program now you have to do something like this ...
    
    
    $ python3 yourfile.py cos 0
    

The result should be 1.0 just like you expect.  
  
Wraping up:  
  
You can keep adding more and more arguments as your heart desires. Now you have a python file that does both sin and cos and you can keep adding to its functionally and maybe make raising numbers to an exponent or whatever really. You may be wondering what the brackets are on sys.argv are. Sys.argv itself is something called a list. A list can contain things such as strings which is how we are getting the arguments from the terminal. As you saw changing the number in the bracket will give you access to a different argument provided from the command line. However without going too much indepth about what exactly a list is because thats for another time just know that lists are just one way to index through and store things in this case the user agruments that he or she types from the command line. This is the very reason that you get and index error when you try to access a sys.argv index that hasn't been given yet. Now that you have learned how to get user input you could radically change your code and make some more interesting functionality with your python code. Maybe even recreate a mini [Zork](https://en.wikipedia.org/wiki/Zork). 

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - Functions](/posts/pythonfunctions/) [Python - If-else-statements __](/posts/pythonifstatements/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
