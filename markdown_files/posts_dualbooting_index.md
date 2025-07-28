


# Dual Booting \(Linux + Windows\)

[__Zsh vs Bash \(Shell Comparsion\)](/posts/Zshvsbash/)   
[Virtual Machine ___](/posts/virtualmachine/)

October 19, 2016

## Dual Booting \(Linux + Windows\)

## Dual booting using a Live USB

  
  
Dual booting is having two different operating systems on your computer / laptop. Usually you can determine which one you want to go into using a bootloader.

  
  


### FAQ:

  
  


#### What is a Live USB?

A live USB is a bootable operating system on a USB. You can use a Live USB to install operating systems onto your computer.   
  


#### How do I create a Live USB?

I happen to already have another guide which you can follow on how to create a [Live USB](https://defunsm.github.io/posts-output/livebooting/).  
  


#### What is a bootloader?

The below is an example of the ubuntu grub bootloader. Which determines what operating system you want to boot into.

  
  
![grub bootloader](https://defunsm.github.io/img/db1.png)   
  


#### Can you do more than dual boot? Like triple boot? Quadra boot?

If you have the space for it. Yes.   
  


## Requirements

  
1 Live USB Free Hard Drive Disk Space

Computer / Laptop   
  


## General Steps

  
Create space for the OS  
Create a [Live USB](https://defunsm.github.io/posts-output/partitioningandmounting/) Enter BIOS with the Live USB inserted   
Select the Live USB to boot into the OS   
Follow specific steps to install the OS onto your Hard Disk Drive   
  


## Specific Steps

  


#### Creating a Partition for the OS:

Linux: [Partitioning Guide for Linux Distributions](http://smsalman.com/wiki/partitioning-mounting-linux/) Windows:   
  


#### Create a Live USB:

As a reference you should look at a previously made guide ... [Live USB Guide](https://defunsm.github.io/posts-output/livebooting/)   
  


#### Enter BIOS:

  
  


#### Install Ubuntu:

  
  
_Now that you are booted into ubuntu click on the**Install Ubuntu Icon**. _   
  
![Dual Boot](https://defunsm.github.io/img/db2.png)   
  
_Select the language and click continue._   
  
![Dual booting Ubuntu](https://defunsm.github.io/img/db3.png)   
  
_Now make sure you choose the "**Something else** " option or else you might risk losing data on other partitions._   
  
That should bring you to the installation type place where you select the partitions you made. Make sure you are selecting the right ones for them.   
  
The ext4 partition should contain the **/** directory which is the root directory make sure to indicate that in the mount place.   
  
![Ubuntu selecting Partition](https://defunsm.github.io/img/db4.png)   
  
_Now it should install and when you reboot it'll be a persistant operating system on your hard drive disk._

**Tags:** [Computers](/tags/Computers/) [Guide](/tags/Guide/)

[__Zsh vs Bash \(Shell Comparsion\)](/posts/Zshvsbash/) [Virtual Machine __](/posts/virtualmachine/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
