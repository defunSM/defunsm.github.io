


# Python - Booleans

[__Python - If-else-statements](/posts/pythonifstatements/)   
[Python - Variables ___](/posts/pythonvariables/)

October 8, 2016

## Python - Booleans

A boolean is either True or False. In python 0 evaluates to False. While every other number is True. Boolean is also a data type which is used to do logical conditions. Such as is 2 greater than 5? Thus returns the boolean False.   
  
![booleans](https://defunsm.github.io/img/booleans.png)   
  
Note that the double equal sign is not the same as a single equal sign. This is a common mistake rather when using the == it tests for equality if or not the two things being compared are equal. If they are it returns true otherwise false.   
  


Open up a python file you can call it pybooleans.py and type out the following.
    
    
    def main():
    
        print("Is 2 less than 5?: ", (2 < 5))
        print("Is 2 greater than 5?:", (2 > 5))
        print("Is 2 equal than 5?: ", (2 == 5))
        print("Is 3 greater than or equal to 3?: ", (3 >= 3))
        print("Is 5 less than or equal to 1?: ", (5 >= 1))
    
        print("Is True equal to True?: ", (True == True))
        print("Is True equal to False?: ", (True == False))
    
        print("What is the value of True or True?: ", (True or True))
        print("What is the value of True or False?: ", (True or False))
        print("What is the value of False or False?: ", (False or False))
    
        print("What is the value of False and False?: ", (False and False))
        print("What is the value of False and True?: ", (False and True))
        print("What is the value of True and True?: ", (True and True))
    
        print("What is the value of not True and True?: ", (not True and True))
        print("What is the value of not True or True?: ", (not True or True))
        print("What is the value of not True or not True?: ", (not True or not True))
    
        print("What is the value of True and 0?: ", (True and 0))
        print("What is the value of 1 and 0?: ", (1 and 0))
        print("What is the value of 1 or 0?: ", (1 or 0))
    
    main()
    

  
  


Result:
    
    
    Is 2 less than 5?:  True
    Is 2 greater than 5?: False
    Is 2 equal than 5?:  False
    Is 3 greater than or equal to 3?:  True
    Is 5 less than or equal to 1?:  True
    Is True equal to True?:  True
    Is True equal to False?:  False
    What is the value of True or True?:  True
    What is the value of True or False?:  True
    What is the value of False or False?:  False
    What is the value of False and False?:  False
    What is the value of False and True?:  False
    What is the value of True and True?:  True
    What is the value of not True and True?:  False
    What is the value of not True or True?:  True
    What is the value of not True or not True?:  False
    What is the value of True or 0?:  0
    What is the value of 1 and 0?:  0
    What is the value of 1 or 0?:  1
     

Explanation below:

Line 1:
    
    
    def main()
     

Always start with this creating our main function.   
  
Line 3-7:
    
    
        print("Is 2 less than 5?: ", (2 < 5))
        print("Is 2 greater than 5?:", (2 > 5))
        print("Is 2 equal than 5?: ", (2 == 5))
        print("Is 3 greater than or equal to 3?: ", (3 >= 3))
        print("Is 5 less than or equal to 1?: ", (5 >= 1))
     

Using the the operators to test for true or false. In line 5 it tests if 2 and 5 are equal since they are not it returns false. If you did 5 == 5 than it would've returned true.   
  
Line 9-10:
    
    
        print("Is True equal to True?: ", (True == True))
        print("Is True equal to False?: ", (True == False))
     

You can also test if booleans are equal to each other in the following way using == to do a comparison test between the two booleans.   
  
Line 12-14:  

    
    
        print("What is the value of True or True?: ", (True or True))
        print("What is the value of True or False?: ", (True or False))
        print("What is the value of False or False?: ", (False or False))
     

Using "or" you are testing if one of the booleans is true. If at least one of the booleans is true than it'll return true but if both are false than it'll return false. Also if both are true than you will get true as well.   
  
Line 16-18:
    
    
        print("What is the value of False and False?: ", (False and False))
        print("What is the value of False and True?: ", (False and True))
        print("What is the value of True and True?: ", (True and True))
     

Using "and" you are testing if both of the booleans are true. If both are true than you will get true however if either one is false you'll get false. As well as both being false you will get false.   
  
Line 20-22:
    
    
        print("What is the value of not True and True?: ", (not True and True))
        print("What is the value of not True or True?: ", (not True or True))
        print("What is the value of not True or not True?: ", (not True or not True))
     

Using not you are reversing the boolean. So not True is False and vise versa not False is True.   
  
Line 24-26:
    
    
       print("What is the value of True or 0?: ", (True and 0))
        print("What is the value of 1 and 0?: ", (1 and 0))
        print("What is the value of 1 or 0?: ", (1 or 0))
     

You'll notice in this section we are using 0's and 1's. 1 and any other number will evaluate as True. The only expection is 0 which evaluates to False. So line 24 returns 0 because 0 is evaluated to False and hence returns the 0. But in line 26 you see the 1 being returned because or is being used and so if one of them is evaluated to true and it'll be true and thus returning the 1.   
  
Line 28:
    
    
    main()
     

Finally we call the function main. Nothing new here.   
  


**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - If-else-statements](/posts/pythonifstatements/) [Python - Variables __](/posts/pythonvariables/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
