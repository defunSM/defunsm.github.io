


# Python - Optparse

[__Python - Color in Terminal](/posts/python-color-in-terminal/)   
[Python - Naive Bayes Algorithm ___](/posts/udacity-machine-learning/)

December 26, 2016

## Python - Optparse

Optparse is pretty nice way to make command-line tools. It streamlines the process of making arguments. To add the parser from the optparse library in Python.
    
    
    from optparse import OptionParser
     

This will allow you to make a parser using OptionParser\(\) like the following.
    
    
    parser = OptionParser()
    

This will allow you to add options to it like the following.
    
    
    parser.add_option("-c", "--cos", help="Calculates the cosine given the degree.", dest="cosdegree", action="store")
    

The add\_option is avaliable can allows you to store the value passed to the -c option. So on the command line you can do things like the following..
    
    
    <scriptname> -c 3
    

You can also add something like this...
    
    
    options, arguments = parser.parse_args()
    

so now you can put the values passed to each option as a variable. Like so...
    
    
    ans = options.cosine
    

and you can retrieve the value passed to -c using options.cosdegree since it was stored in that using the dest="cosdegree" like I showed you above.   
  
You will be able to change the dest= to something else by default if not specified it would be cos since that is the option it is being assigned to.   
  
So you can create some useful scripts to calculate the cos or sin from the command line without opening up a calculator. You could essentially make a command line for commonly used math functions on the command line using optparse. If you're too lazy to open up a calculator.   
  
Also have the classical –help or -h which will list a short description of each option. You can specify the help that'll be show for each option using the help= when creating the option using add\_option.   
  
The documentation for [Optparse](https://docs.python.org/3/library/optparse.html).

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/)

[__Python - Color in Terminal](/posts/python-color-in-terminal/) [Python - Naive Bayes Algorithm __](/posts/udacity-machine-learning/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
