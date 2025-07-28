


# Python - Entropy in Machine Learning

[__Python - Prior, Posterior Probability and Normalization](/posts/python-posterior-probability/)   
[Python - GTK 3.0 ___](/posts/python-gtk/)

January 9, 2017

## Python - Entropy in Machine Learning

Entropy when talked about in information theory relates to the randomness in data. Another way to think about entropy is that it is the unpredictability of the data. So a high entropy is essentially saying that the data is scattered around while a low entropy means that nearly all the data is the same. So since in machine learning data is essentially the way that we build classifiers we often need to manage the entropy to be not too low nor too high and reach a nice balance. The Pi in the entropy equation below represents the probability of the event occuring. 

![picture of entropy equation](https://defunsm.github.io/img/entropypic.png)

So just a few things to note when calculating entropy we are using log 2 and not log 10 small distinction but does change your result. You may see different forms of this equation if you search up entropy but generally you'll find it'll look something like the above.   
  
So what is the point of finding entropy? I mean yes its nice I guess to know if your data is more or less random but what can we do with entropy? Well entropy also tells us how much information we are going to get from a specific event. For example if we have a coin and say it isn't loaded in any way and has a 50/50 chance of either head or tails. This will result in lower entropy since the chances are fair which means more information.   
  
We could create a nice python script to calculate the entropy for us. So lets go ahead and do that we'll need the math module for the log. After that we'll make a function that will take an array of probabilities of each event occuring. So our probability array will be \[0.5, 0.5\] since it is an equal chance of either heads or tails occuring.
    
    
    import math
    
    def entropy_cal(array):
    
        total_entropy = 0
    
        for i in array:
            total_entropy += -i * math.log(i, 2)
    
        return total_entropy
    
    def main():
    
        probabilities = [0.5, 0.5]
        entropy = entropy_cal(probabilities)
    
        print(entropy)
    
    if __name__=="__main__":
        main()
     

One of the things you'll find out if you play around with the entropy equation is that equal chance events give out more information because there is less entropy. For example try changing the probability to \[0.75, 0.25\] in other words a rigged coin toss in which heads is 0.75 and tails is 0.25 or vise versa and you'll find that there is a higher entropy. Events that are more tilted have higher entropy than those with equal chances resulting in less information. So essentially more entropy is less information and less entropy is more information. You can also see this as reduced uncertainity means a lower entropy. Since a higher entropy means there is a higher uncertainity.   
  
So that is about it as far as calculating entropies go and if you were wondering what the units are for entropy it is usally refered to as a 'bit' but this depends on the log base you are using but since we are using 2 which means it can either be 1 or 0.   
  
Thats about it when it comes to just doing some basic calculations with the entropy equation.

**Tags:** [Python](/tags/Python/) [Machine Learning](/tags/Machine Learning/) [Guide](/tags/Guide/)

[__Python - Prior, Posterior Probability and Normalization](/posts/python-posterior-probability/) [Python - GTK 3.0 __](/posts/python-gtk/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
