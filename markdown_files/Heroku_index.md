


# Clojure - How to start a web app using Heroku

[__Python - SpaceTime Diagrams](/posts/special-relativity/)   
[Graphics using Quil in Clojure \(Part 4\) ___](/posts/clojure-using-quil-4/)

November 30, 2016

## Clojure - How to start a web app using Heroku

Heroku is a platform that allows developers to build web apps and run them on their servers. It is really nice that they do have documentation on how to start a server using clojure as well. I'll go over through some of the stuff that they tell you to do from their set up page. You can follow along here or just follow their [instructions](https://devcenter.heroku.com/articles/getting-started-with-clojure#set-up).   
  


# Make a Heroku Account

  
  
First things first is that you will need an account to manage your web apps. Just go ahead and do that on [Heorku](https://signup.heroku.com/dc).   
  


# Installing the Heroku CLI

  
  
Now let us go on ahead and install the Heroku Command Line Interface which you'll need to manage your web apps from the terminal. You can do that using the following command from the terminal.
    
    
    $ wget -qO- https://toolbelt.heroku.com/install.sh | sh 
    

\*You will need to make sure that you have ruby installed as well.  
  


# Create the web app

  
  
Lets go ahead and clone a sample web app that heroku provides or you can clone the reagent heroku web app template either one.
    
    
    $ git clone https://github.com/heroku/clojure-getting-started.git
    

or
    
    
    $ git clone https://github.com/reagent-project/reagent-template.git
    

  
  


# Create the web app on heroku

  
  
Now lets create a heroku app to recieve the code. You can decide to specify the name or leave it blank and it'll give you a random name.
    
    
    $ heroku create 
     

or
    
    
    $ heroku create heroku-app-name
     

  
  


# Push the web app

  
  
Now you can push the source code like you do for git. First make sure to add all files.
    
    
    $ git add .
     

Commit all the files with the message "init".
    
    
    $ git commit -m "init"
     

Push to the heroku web app.
    
    
    $ git push heroku master
     

Now you should be able to visit the site hosting the source code at heroku-app-name.herokuapp.com\!

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - SpaceTime Diagrams](/posts/special-relativity/) [Graphics using Quil in Clojure \(Part 4\) __](/posts/clojure-using-quil-4/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
