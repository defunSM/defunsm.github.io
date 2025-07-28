


# Creating an Exechuteable GUI

[__Creating JFrames using Swing APIs in Clojure \(Part 1\)](/posts/2016-08-30-Using_Swing/)   
[Clojure File to Standalone Jar ___](/posts/2016-08-28-jar/)

August 29, 2016

## Creating an Exechuteable GUI

Note: Before following this guide you may want to familiar yourself with [making jars](https://defunsm.github.io/posts-output/2016-08-28-jar/).   
  
You should have the uberjar which can be created by following a guide I have written previously. Now you want to take it one step further and make the jar into an exe to distribute to different windows platforms. There is a few ways to go about it but I typically use [launch4j](http://launch4j.sourceforge.net/).   
  
After downloading Launch4j precede to the following steps...   
  
Step 1:   
  
Open it up and fill in the output file and Jar field as the following. The output file determines what the .exe file will be called. While the jar field is the uber-jar you select and the launch4j will use to create the .exe file.   
  
![image](https://defunsm.github.io/img/launch4jfirst.png)   
  
Step 2:   
  
After filling those fields switch to the header tab. Click on the GUI radio button unless you're using just console.   
  
![image](https://defunsm.github.io/img/launch4jsecond.png)   
  
Step 3:   
  
Click the JRE tab and enter Min JRE version as what minimum java you need to run the code. Also click the + property button by variables / registry field to add the EXEDIR property.   
  
![image](https://defunsm.github.io/img/launch4jthird.png)

Now click on build wrapper which is the gear icon on top and it should build your .exe file\!

**Tags:** [Clojure](/tags/Clojure/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Creating JFrames using Swing APIs in Clojure \(Part 1\)](/posts/2016-08-30-Using_Swing/) [Clojure File to Standalone Jar __](/posts/2016-08-28-jar/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
