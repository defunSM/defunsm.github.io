


# Python - Printing

[__Python - Numbers](/posts/python2/)   
[Python - Setup ___](/posts/pythonpart0/)

October 5, 2016

## Python - Printing

Open up the python interpreter on your command line by the following...
    
    
    $ python3
    

Type the following one by one into the python interpreter. I'll explain each line one by one later but try to figure out what the result of each line is before typing it out and hitting enter.
    
    
    print("A string")
    
    print('This is a string too')
    
    print("stuff" + "and more stuff")
    
    print("The char:", 'a')
    
    print("The string: ", "stuff")
    
    print("The digit", 5)
    
    print("The float ", 4.0)
    
    print("Printing multiple stuff:", 'a', "stuff", 5, 4.0))
    
    print("First Line \nSecond Line")
    
    print("\tI am a tabbed Line.")
    
    # print("I am a comment so I won't print. :(")
    
    print("""
    This is a bit weird.
    But acts as if I added newlines.
    """)
    

The explanations are below make sure you ran all of them before checking the explanations.
    
    
    python3 ex1.py
    

Explanations:

Line 1:
    
    
    print("A string")
    

Using the print function you display "A string" which is a string to the console. You have to include the quotations otherwise it'll be treated as a variable which you'll learn later.  
  
Line 3:
    
    
    print('This is a string too')
    

This is also a string but using single quotes you can use either whatever you prefer.   
  
Line 5:
    
    
    print("stuff" + "and more stuff")
    

What you are doing here is called concatenation which is a fancy word for joining strings together. You are doing this by using the + symbol adding the two strings to form one string and displaying it onto the console.  
  
Line 7:
    
    
    print("The char", 'a')
    

Using the , symbol is the format symbol in python which allows you to insert the character 'a' into the string. Also notice that is followed by the leter 'c' indicating that it is expecting a character.  
  
You are printing a single character NOT a string. A string contains many characters but a character is a single letter. Notice that I used single quotes for this which if you come from c++ you may know that characters are in single quotes. However in Python you don't have to use single quotes on characters you could use double quotes and this line of code would have worked just fine.  
  
Line 9:
    
    
    print("The string", "stuff")
    

This time you are using the string formator symbol but expecting a string.  
  
Line 11:
    
    
    print("The digit", 5)
    

Formating a digit instead of a string or character.  
  
Line 13:
    
    
    print("The float", 4.0)
    

Formatting a float. A float having digits after the decimal place.  
  
Line 15:
    
    
    print("Printing multiple stuff:", 'a', "stuff", 5, 4.0))
    

Now you are using multiple commas to print out a character, string, integer and a float.  
  
Line 17:
    
    
    print("First Line \nSecond Line")
    

The "\n" is an escape character and creates a new line thus showing you the string on two different lines on the console. There are many escape characters and if you want to see all of them you can see them in the [python documentation](https://docs.python.org/2.0/ref/strings.html).  
  
![escapes](https://defunsm.github.io/img/escapes.png)  
  
Line 19:
    
    
    print("\tI am a tabbed Line.")
    

\t creates a tab and displays it onto the console.  
  
Line 21:
    
    
    # print("I am a comment so I won't print. :(")
    

This is a comment so it won't show up. This is how you write notes in your program without it being interpreted as code.  
  
Line 23-26:
    
    
    print("""
    This is a bit weird.
    But acts as if I added newlines.
    """)
    

Displays on two lines without the use of a \n escape character. Kinda weird but works.  
  
Thats it for now. Finally to quit the python interpreter type the following ...
    
    
    exit()
    

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - Numbers](/posts/python2/) [Python - Setup __](/posts/pythonpart0/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
