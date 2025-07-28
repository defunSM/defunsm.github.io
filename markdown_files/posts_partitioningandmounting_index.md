


# Partitoning and Mounting \(Linux\)

[__WordCal - A Python Script](/posts/wordcal/)   
[SMChat ___](/posts/smchat/)

October 1, 2016

## Partitoning and Mounting \(Linux\)

# Partitioning

  
  
Think of it as creating a room \(partition\) in a house \(The actual harddrive\) for where data can stay.   
  


### Creating a Partition on Linux

  
  
![partitioning](https://defunsm.github.io/img/par1.png)   
  
Typing `lsblk` will show a quick result of your avaliable devices on your computer.   
  
It'll display two types disks and parts.   
  
A quick difference you can see between disks and parts is that disks don't have a number at the end. **Note:** There are expections but for the most part USBs don't have numbers at the end.   
  
Parts on the other hand do have numbers that correspond with the disk it is in. Such as _sda1_ is within the disk sda and thus if there is a _sda5_ most likely there are four other partitions.   
  


#### Using a disk management program: Gparted

There are various disk management programs but _gparted_ is most common in linux. There is _fdisk_ and _parted_ but without a gui that can acomplish the same feats as gparted.   
  
![gparted](https://defunsm.github.io/img/par2.png)   
  
Im going to be changing the _sdb_ disk so make sure to select that. **Note:** All paths to devices avaliable on the computer start with /dev/...   
  
Now we already have one partition on the _sdb_ disk called _sdb1_. If we did have more unallocated memory we could create another partition from the unallocated memory. However we don't so lets delete the partition _sdb1_ and create 2 partitions splitting the memory.   
  
Deleting the partition by right clicking on the partition you want deleted and selecting "Delete". Now all of the partition memory is turned to unallocated as seen below.   
  
![gparted unallocated](https://defunsm.github.io/img/par3.png)   
  
**Note:** No changes actually occur till the green check mark is clicked.   
  
Now if you check your devices with `lsblk` you'll notice that _sdb_ is all alone without _sdb1_ or any partitions. This is because all of sdb is unallocated memory at the moment.   
  
![gparted nodisk](https://defunsm.github.io/img/par4.png)   
  
Now you can select the unallocated memory and create a partition with it. However since you want to make two partitions leave some memory left for the second one depending on how much you want. This is done by right clicking on the unallocated memory and clicking "New".   
  
This should bring you to a menu such as this below ...   
  
![gparted filesystem](https://defunsm.github.io/img/par5.png)   
  
If you want to make a 60 _GiB_ partition make the new size 60\*1024 = 61440 _MiB_. \(1024 _MiB_ in 1 _GiB_\) Keep the everything else the same since ext4 is readiable by linux.   
  
Then click on the rest of the unallocated memory and click add to create the rest of the memory into a partition. If that went smoothly you should have two partitions now and you can verify this by `lsblk`.   
  
![gparted two partitions](https://defunsm.github.io/img/par6.png)   
  
The result is two partitions on the sdb disk detected by your computer. Thats it now you have two partitions.   
  


### Mounting the Partitions / Placing files in the Partitions

  
  
**Note:** If you aren't too familiar with using a terminal please read up on how to use a terminal.   
  
`mount` is a command that will allow you to attach the filesystem \(partition\) to the computer.   
  
In this case we are going to mount the two partitions onto our computer. Begin by opening up your favorite terminal and entering the following command. Ignore the dollar sign it just stands for the prompt.   
  
`$ mount /dev/sdb1 /mnt` \- What this does is attach the first partition to the /mnt directory.   
  
You can check this by doing `lsblk`   
  
![gparted mount](https://defunsm.github.io/img/par7.png)   
  
As you can see the mount point of _sdb1_ is now /mnt   
  
You can now copy files into the /mnt directory using `cp` or make files using `echo` Whatever is placed into the /mnt directory will now be in the partition.   
  
Example:   
  
`$ echo "hello" >> /mnt/file.txt`   
  
Now you should see a file called file.txt in the /mnt directory using `ls /mnt`   
  
Using `umount` you can remove a mount point from the partition unmounting it.   
  
Example:   
  
`$ umount /dev/sdb1` \- You can examine through `lsblk``ls /mnt` that it is no longer there.   
  
You can mount using `mount /dev/sdb1 /mnt` and again see that the file.txt is now back again which shows that the file indeed is in the partition.

**Tags:** [Computers](/tags/Computers/) [Guide](/tags/Guide/)

[__WordCal - A Python Script](/posts/wordcal/) [SMChat __](/posts/smchat/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
