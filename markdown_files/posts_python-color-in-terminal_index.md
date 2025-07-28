


# Python - Color in Terminal

[__Python - Parsing HTML with BeautifulSoup](/posts/python-web-scraper/)   
[Python - Optparse ___](/posts/python-optparse/)

December 27, 2016

## Python - Color in Terminal

So say you have a script written and displays some sort of information. It isn't just enough to just display it in normal colors but you want to add color coded messages to help readability. So there is a few options such as the [colorama](https://pypi.python.org/pypi/colorama/0.3.3) module which helps you add color when you print.   
  
I wanted to create a small python file and make my own functions in order to quickly color in text being printed to the terminal. Set the colors as strings into variables.
    
    
    green = "\033[1;32;40m"
    red = "\033[1;31;40m"
    yellow = "\033[1;33;40m"
    purple = "\033[1;35;40m"
    cyan = "\033[1;36;40m"
    white = "\033[1;37;40m"
    

Than put the variables into an array as c short handing it for color. 
    
    
    c = [green, red, yellow, purple, cyan, white]
    

So you can call green just by doing c\[0\] infront of a string. So if you wanted to have a green colored text appear in the terminal you can do the following... 
    
    
    print(c[0], "Green text")
    

I also made a function display\_colors in case you want to see which default color you want to use. I also made a ctext function which takes in the style, textcolor and background color in case you want to use something else besides the default colors. 
    
    
    def ctext(style, textcolor, bgcolor):
    
        return "\033[" + str(style) + ";" + str(textcolor) + ";" + str(bgcolor) + "m"
    

The github Repo of [colormyterminal](https://github.com/defunSM/colormyterminal).

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/)

[__Python - Parsing HTML with BeautifulSoup](/posts/python-web-scraper/) [Python - Optparse __](/posts/python-optparse/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
