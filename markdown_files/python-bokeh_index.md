


# Python - Bokeh to Graph Boot Times

[__Python - Naive Bayes Algorithm](/posts/udacity-machine-learning/)   
[Python - SpaceTime Diagrams ___](/posts/special-relativity/)

December 17, 2016

## Python - Bokeh to Graph Boot Times

So I been playing around with Bokeh's graphing utilities which is always fun. So I wanted to make some graphs using the boot times that I keep using a script. So I made three different graphs 2 of which represent the total boot time and the other pie graph represents the total boot time into segments of firmware, loader, kernel and userspace. 

![graph image](https://defunsm.github.io/img/bokeh3.png)

The one above demonstrates the total time as an area under the line. You can clearly see here that there was a spike in the boot time since that 40 second boot time is distinguishable from the other plots are around 12 seconds.

![graph pie graph](https://defunsm.github.io/img/bokeh2.png)

This one is a pie graph I couldn't figure out how to label them but it just demonstrates each part of the boot as a pie graph \(Firmware, Loader, Kernel, Userspace\).

![graph histogram](https://defunsm.github.io/img/bokeh1.png)

There is also a histogram showing the usual time it takes to boot up which you can see from this graph is around 12 seconds since that is the most frequent time it takes to boot up.   
  


The data is collected from systemd-analyze. Which I have a script which just stores all the boot times into a file from time.txt.
    
    
    systemd-analyze time >> time.txt
    

[Github Repo](https://github.com/defunSM/visualize-my-boot-time)

**Tags:** [Python](/tags/Python/) [Graphing](/tags/Graphing/) [Code](/tags/Code/)

[__Python - Naive Bayes Algorithm](/posts/udacity-machine-learning/) [Python - SpaceTime Diagrams __](/posts/special-relativity/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
