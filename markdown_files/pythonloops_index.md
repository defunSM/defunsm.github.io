


# Python - Recursion

[__Live Booting \(USB\)](/posts/livebooting/)   
[Python - Functions ___](/posts/pythonfunctions/)

October 12, 2016

## Python - Recursion

Recursion is a important concept in computer science and a useful technique to use in programming. It cuts down time and saves you unnessary typing which is always good. Most programming languages allow recursion and it is a very useful way to reach a solution to a problem that requires the result of the previous solution.   
  
There are a couple of ways to implement recursion in your programs. Once you learn how to do recursion you'll be able to greatly type less and deploy more interesting behavior in your program.   
  
One of the ways to implement recursion in python is using a for loop. This is typically the way loops are done in python and is tend to be safer than the other ways. Since using a for loop you set the condition for which is looping. 

  
  
For loops are rather nice that they usually loop the elements of a list. So you can hand a bunch of elements and the for loop will do something to each one of them. Lets look at an example. 
    
    
     def main():
    
        sum = 0
        for i in range(5):
            print(i)
            sum += i
    
        print(sum)
    
    
    main()
    

Results:
    
    
    0
    1
    2
    3
    4
    10
    

Notice that a variable is being set before the for part is started. The sum is set to 0 before the for loop begins on line 4. Line 4 is where the for loop begins and everything in the loop is indented. This is the syntax for for loops. Notice that following the for keyword is a variable "i" which is arbitary but you could call it whatever really just make sure your using the same variable in the body of the loop. After the variable you use "in" which is followed by the list which is created by range\(5\). Range is a really nice function that creates a list of numbers in this case it creates numbers from 0 to 4. This is evident since you see the numbers being printed. Also note that at the end when we print sum all of the numbers printed added up is indeed 10 so the numbers in the list created by range\(5\) was added to the sum variable one at a time. If the sum += 1 is a bit weird to you it is really the same thing as doing sum = sum + 1. The way I have written it is more cleaner since it removes writing sum again and if you coded in c++ before you mightve seen the same kind of style before.   
  
Now lets take another look at a way to do the same thing but using a while loop.
    
    
    def main():
    
        sum = 0
        i = 0
        while i < 5:
            print(i)
            sum += i
            i += 1
    
        print(sum)
    
    
    main()
    

Result:
    
    
    0
    1
    2
    3
    4
    10
    

The result is the same with using a while loop. However notice that we had to implicitly create the sum and i variable this time and set both to 0. Also make a condition for the while loop so that it knows when to stop. If we wrote while True: instead of putting the condition after the while it would essentially run forever so don't do this. Also if you didn't increment the i variable by 1 every time in the loop then also the while loop will run forever. This is why writing while loops are not as safe as writing a for loop since there is a potentional for while loops to run forever.  
  


**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Live Booting \(USB\)](/posts/livebooting/) [Python - Functions __](/posts/pythonfunctions/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
