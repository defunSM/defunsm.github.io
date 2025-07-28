


# Python - Reading and Writing Files

[__Python - GTK 3.0](/posts/python-gtk/)   
[Python - Parsing HTML with BeautifulSoup ___](/posts/python-web-scraper/)

December 30, 2016

## Python - Reading and Writing Files

Reading and Writing to files in python is rather useful when you want to store down some of the results you get after running a program. So here is a simple stright forward guide to doing just that.   
  
Go ahead and open up a file as ex1.py or whatever you prefer really.
    
    
    $ touch ex1.py
    

Also create a .txt file for our dummy text file that we'll read with python.
    
    
    $ echo "This is a text file" >> dummytext.txt
    

If doing that confuses you than you can just use a text editor and create the .txt file that way same thing but the above is just a command to send the string into a file in this case dummytext.txt.   
  
Just as a sanity check I usually like to cat the file to make that the text is actually there so go ahead and do that.
    
    
    cat dummytext.txt
    

Alright we aren't crazy and text is there. If it's not there than go ahead and do it manually and use a text editor to type it into the file or whatever method you prefer.  
  
Now on to the python part where we code up the program that will read the the .txt file. So go ahead and open up ex1.py. Write in the following into ex1.py...
    
    
    #!/usr/bin/env python
    import sys, os
    
    def main():
    
        f = open('dummytext.txt', 'r')
        text = f.read()
    
        print(text)
        
        f.close()
    
    if __name__=="__main__":
        main()
    

Run that and you'll see the text appears that appears in dummytext.txt file. So let me explain what exactly happened.  
  
So using open\(\) will open up the file you want so that you can read it which is told to the open function by passing the 'r' if you passed it 'w' it would write to the file and if you did 'a' it would append.   
  
When calling read\(\) on the f you are taking all the text in the file and placing it into the variable called text and than later printing it out.  
  
Now lets do something else and write to a file. Note that when doing this you'll realize when using 'w' rather than 'r' in the open function it'll cause the original file to be trancated. This means whenever opening a file with the 'w' parameter it'll remove all the text in the file before hand. This is important to know if you're going to be using this on important files so be aware that using 'w' will remove the text in the file. So continuing on lets change the code we have to the following...
    
    
    #!/usr/bin/env python
    import sys, os
    
    def main():
    
        f = open('dummytext.txt', 'w')
    
        f.write("New text in the file")
        f.write("\n")
    
        f.close()
    
    if __name__=="__main__":
        main()
    

After running that check the dummytext.txt file and you'll realize that the file has be changed to contain "New text in the file". This is because of the write\(\) function that is avaliable for you to use when you open a file with 'w'. Also keep in mind to always close the file after opening it as this could lead to problems in more complex programs.  
  
Now let me show you another way where you can preserve your file and insert other text into it. So change your code one more time to the following.
    
    
    #!/usr/bin/env python
    import sys, os
    
    def main():
    
        f = open('dummytext.txt', 'a')
    
        f.write("The previous text will be preserved this time.")
        f.write("\n")
    
        f.close()
    
    if __name__=="__main__":
        main()
    

Now when you check the file you'll see the the previous text in the dummytext is still there and the new text that was writen into the file is also there. When opening a file with 'a' you are preserving the original text in the file but appending new strings into it thus 'a' stands for appending.   
  
Thats pretty much it when it comes to all the basic reading and writing in python. 

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - GTK 3.0](/posts/python-gtk/) [Python - Parsing HTML with BeautifulSoup __](/posts/python-web-scraper/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
