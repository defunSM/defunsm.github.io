


# Python - Variables

[__Python - Booleans](/posts/python-booleans/)   
[Python - Numbers ___](/posts/python2/)

October 7, 2016

## Python - Variables

Now we'll actually be using a text editor and no longer the python interpreter. However you should periodically use the python interpreter which is a good way to learn.   
  
To write python code you need to create a file with the .py extension this will tell your computer that you are writing python code. There is a way to get around this but for now it isn't really necessarily to do that but know that there is. For now just create a file called "pyvariables.py" in your favorite text editor.   
  
Type out the following code into the file. Actually type it out to get that muscle memory into your fingers instead of pasting it onto your text editor and type out the entire code and I'll explain it through one line at a time.   
  

    
    
    import math
    
    def main():
    
        circumference_of_earth_in_km = 40000
        time_for_one_rotation_in_hours = 24
        minutes_in_hour = 60
        seconds_in_minute = 60
    
        radius_of_earth = circumference_of_earth_in_km / (2 * math.pi)
    
        print("Radius of Earth:", radius_of_earth , " km")
    
        velocity_of_earths_rotation = (circumference_of_earth_in_km * 1000) / (time_for_one_rotation_in_hours * minutes_in_hour * seconds_in_minute)
    
        print("Velocity:", velocity_of_earths_rotation , "m/s") 
    
        acceleration_of_earth = (velocity_of_earths_rotation ** 2) / (radius_of_earth * 1000)
    
        print("Acceleration:", acceleration_of_earth , "m/s^2") 
    
    main()
    

  


Now after you have done typing it out go ahead and open up a terminal and run the following command in the same directory that you have created the file in.
    
    
    $ python pyvariables.py
    

Result:
    
    
    Radius of Earth: 6366 km
    Velocity: 462 m/s
    Acceleration: 0.033528 m/s^2
     

If you get an error running it than make sure you have typed out everything exactly.

Below are the explanations:   
  
Line 1:
    
    
    import math
     

In the first line we are importing functions from the math "module" which will allow us to use the math.pi which you seen in line 10. Without the import we would get an error. Right now you don't have to know too much about what modules are but know that Python has a very convinent way of bringing in other libraries to use in your code in this case you are able to use all the math functions without actually having to type in the functions into the code hence importing them. If you have coded in C++ than this is basically equivilant to \#include where you are bringing in other libraries into your file.   
  
Line 3: 
    
    
    def main():
     

This is how you define a function in python. Every file has a main function which is where all the action happens. Main is the name of the function followed by parantheses which right now is empty but if our function took any arguments which we'll get to in a later in depth discussion about functions there would be variables inbetween the parantheses. For now just realize that this is the snytax for creating a function in python. Using def and than followed by the name of the function and parantheses finally double colon.   
  
Also take note that everything in the main function is indented expect the final line which is not in the function.   
  
Line 5-8:
    
    
        circumference_of_earth_in_km = 40000
        time_for_one_rotation_in_hours = 24
        minutes_in_hour = 60
        seconds_in_minute = 60
     

So we have 4 variables listed above. Variables in python have specific naming conventions such as variables can not contain dashes, numbers or special characters in them and must be lowercase and if you need to use multiple words in a variable it is customary to use an underscore. Followed by the variable name is an equal sign which is the assignment operator in Python. It is assigning the number 40000 to the variable circumference of the earth variable and binding the number to it. We see that we have four variables recieving assignment.   
  
Line 10:
    
    
    radius_of_earth = circumference_of_earth_in_km / (2 * math.pi)
     

So we have another variable the radius of the earth which is being assigned whatever the result of circumference of the earth divided by \(2 \* math.pi\). The math.pi is the value of pi and is imported from the math library from line 1. So we can do math with variables and set it to another variable.   
  
Line 12:
    
    
    print("Radius of Earth:" , radius_of_earth , " km")
     

Then we have our good old friend print that will display the radius of the earth. Notice that instead of a number or string we are putting in a variable that contains a number. This is essentially the same thing as giving it a number as we did in previous exercises.   
  
Line 14:
    
    
    velocity_of_earths_rotation = (circumference_of_earth_in_km * 1000) / (time_for_one_rotation_in_hours * minutes_in_hour * seconds_in_minute)
     

Calculating the velocity of the earth by converting the circumference into meters and the rotation of the earth into seconds so that you can get a velocity in terms of meters per second. Notice that instead of typing out the conversation which we could do we are using the variables we have already set.   
  
Line 16:
    
    
    print("Velocity:", velocity_of_earths_rotation , " m/s") 
     

Prints the velocity of the earth's rotation for us.   
  
Line 18:
    
    
    acceleration_of_earth = (velocity_of_earths_rotation ** 2) / (radius_of_earth * 1000)
     

Sets the acceleration of the earth using the a = \(v2\)/r. Nothing we haven't seen. \*\* to raise the value of the velocity of the earth to the second power.   
  
Line 20:
    
    
    print("Acceleration:",  acceleration_of_earth, "m/s^2") 
     

Nothing new. Prints the acceleration.   
  
Line 22:
    
    
    main()
     

Notice that this is the name of the function and is outside of the function. This basically calls the function main. If you removed this last line and ran it nothing would happen because you didn't call it. 

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - Booleans](/posts/python-booleans/) [Python - Numbers __](/posts/python2/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
