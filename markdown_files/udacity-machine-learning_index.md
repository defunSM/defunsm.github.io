


# Python - Naive Bayes Algorithm

[__Python - Optparse](/posts/python-optparse/)   
[Python - Bokeh to Graph Boot Times ___](/posts/python-bokeh/)

December 25, 2016

## Python - Naive Bayes Algorithm

Been trying to get into machine learning and found that the udacity courses are extremely well. Specially at their intro into machine learning course which is what I'm doing over the winter break to familiarize myself with different algorithms. They go step by step and don't really require much background besides some python programming as a prerequisite.   
  
[Udacity Intro into Machine Learning Course](https://www.udacity.com/course/intro-to-artificial-intelligence–cs271)

[Udacity Project Repo for Intro Into Machine Learning](https://github.com/udacity/ud120-projects)   
  


The udacity course goes through explaining the concepts of machine learning rather well. One of the first algorithms that the course introduces you to is the Naive Bayes algoirthm.   
  
[Naive Bayes Algorithm Sklearn](http://scikit-learn.org/stable/modules/naive_bayes.html)   
  


Python has a varity of libraries for machine learning like tensorflow, sklearn, and numpy. Sklearn has algorithms which is pretty stright forward to use and implement in your code. You can google it and sklearn will provide a short example code on how to use that particular algorithm and also displays the pros and cons of that particular algorithm. For example the Naive Bayes Algorithm shows a short example code in just 3 lines of code you can make your prediction dataset. Also using the [sklearn.metrics](http://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html) you can get a feel for how well your classifer does in predicting new data points.
    
    
    from sklearn.naive_bayes import GaussianNB
    gnb = GaussianNB()
    y_pred = gnb.fit(iris.data, iris.target).predict(iris.data)
    
    
    
    from sklearn.metrics import accuracy_score
    acc = accuracy_score(iris.data, y_pred)
    

As you continue through the udacity course you'll be introduced to two other algorithms the Support Vector Machines and the Decision Tree algorithm. The course is approximated to be 4 months but I started 2 days ago and finished about 1/4 of it getting up to Decision Trees in two days so it can definitely be finished in less than a month if you go through it really quickly.

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Machine Learning](/tags/Machine Learning/)

[__Python - Optparse](/posts/python-optparse/) [Python - Bokeh to Graph Boot Times __](/posts/python-bokeh/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
