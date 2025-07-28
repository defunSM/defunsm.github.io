


# Python - Creating a Table using PyGt5

[__Clojure - Basic Incanter](/posts/clojure-incanter/)   
[Python - Running Commands ___](/posts/python-commands/)

January 14, 2017

## Python - Creating a Table using PyGt5

![table](http://defunsm.github.io/img/pytable.png)

[PyGt5](http://pyqt.sourceforge.net/Docs/PyQt5/index.html) is pretty nice when it comes to constructing some nice tables. I found that making tables in PyGt5 is easier than Gtk. So I thought I would just show you how to create a really quick python script to take a file such as the one below and create a table from it in a frame. Create the following text file below as example.txt and make sure you add those , because we are going to be later spliting by ',' to get each of the element and place them into the table.
    
    
    red,blue,yellow
    c++,java,python
    physics,chemistry,biology
    1,2,3
     

So if you don't have pyqt5 yet go ahead and install that with pip or whatever you use to download python modules.
    
    
    pip install pyqt5
     

Now there's already some basic tutorials out there to make tables like the one from [pythonspot](https://pythonspot.com/en/pyqt5-table/). However I wanna show how to make a more functional table of taking the example.txt and placing it into the table. So we'll just follow the example given and modify it. So go ahead and copy that code into the sample in pythonspot and we'll be modifying specifically the the create\_table\(\) part.
    
    
    #!/usr/bin/env python
    import sys
    from PyQt5.QtWidgets import QMainWindow, QApplication, QWidget, QAction, QTableWidget,QTableWidgetItem,QVBoxLayout
    from PyQt5.QtGui import QIcon
    from PyQt5.QtCore import pyqtSlot
    
    class App(QWidget):
    
        def __init__(self):
            super().__init__()
            self.title = 'PyQt5 table - pythonspot.com'
            self.left = 0
            self.top = 0
            self.width = 300
            self.height = 200
            self.initUI()
    
        def initUI(self):
            self.setWindowTitle(self.title)
            self.setGeometry(self.left, self.top, self.width, self.height)
    
            self.createTable()
    
            # Add box layout, add table to box layout and add box layout to widget
            self.layout = QVBoxLayout()
            self.layout.addWidget(self.tableWidget)
            self.setLayout(self.layout)
    
            # Show widget
            self.show()
    
        def createTable(self):
           # Create table
            self.tableWidget = QTableWidget()
            self.tableWidget.setRowCount(4)
            self.tableWidget.setColumnCount(2)
            self.tableWidget.setItem(0,0, QTableWidgetItem("Cell (1,1)"))
            self.tableWidget.setItem(0,1, QTableWidgetItem("Cell (1,2)"))
            self.tableWidget.setItem(1,0, QTableWidgetItem("Cell (2,1)"))
            self.tableWidget.setItem(1,1, QTableWidgetItem("Cell (2,2)"))
            self.tableWidget.setItem(2,0, QTableWidgetItem("Cell (3,1)"))
            self.tableWidget.setItem(2,1, QTableWidgetItem("Cell (3,2)"))
            self.tableWidget.setItem(3,0, QTableWidgetItem("Cell (4,1)"))
            self.tableWidget.setItem(3,1, QTableWidgetItem("Cell (4,2)"))
            self.tableWidget.move(0,0)
    
            # table selection change
            self.tableWidget.doubleClicked.connect(self.on_click)
    
        @pyqtSlot()
        def on_click(self):
            print("\n")
            for currentQTableWidgetItem in self.tableWidget.selectedItems():
                print(currentQTableWidgetItem.row(), currentQTableWidgetItem.column(), currentQTableWidgetItem.text())
    
    if __name__ == '__main__':
        app = QApplication(sys.argv)
        ex = App()
        sys.exit(app.exec_())
     

So you should have it like this so far. And if you run it you'll see a cell 4 by 2. So now lets get to editing this to make it take from the example.txt so we'll go stright to createTable and edit that method specifically since that is what we want. Change it to the following...
    
    
        def createTable(self):
           # Create table
            elements = []
            f = open('example.txt','r')
    
            for line in f.readlines():
                elements.append(line.split(","))
                
            f.close()
    
            self.tableWidget = QTableWidget()
            self.tableWidget.setRowCount(len(elements))
            self.tableWidget.setColumnCount(3)
    
            for i in range(len(elements)):
                self.tableWidget.setItem(i, 0, QTableWidgetItem(elements[i][0]))
                self.tableWidget.setItem(i, 1, QTableWidgetItem(elements[i][1]))
                self.tableWidget.setItem(i, 2, QTableWidgetItem(elements[i][2]))
    
            # table selection change
            self.tableWidget.doubleClicked.connect(self.on_click)
     

Now if you run this you'll see that it will read from the example.txt and actually take those and put it into the table. Try it put more elements into the example.txt and you'll see it correctly places them into the table. Now let me explain what we did the method to do this.
    
    
    elements = []
    f = open('example.txt','r')
     

This part is creating a variable to store all the elements in the example.txt file to store into an array. After that we open the example.txt using the read param since all we are going to do is read the example.txt file. Of course we also close it later on which you should always remember to do with f.close\(\).
    
    
    for line in f.readlines():
       elements.append(line.split(","))
                
    f.close()
     

This is we loop through each line with a for statement and spliting based on the comma. If you're confused by this just place a print\(elements\[1\]\) in the table method to see how the array looks so that you can see how exactly we are going to put them into the tableWidget.
    
    
    self.tableWidget = QTableWidget()
    self.tableWidget.setRowCount(len(elements))
    self.tableWidget.setColumnCount(3)
     

This part is actually creating the QTableWidget which is the table. As well as stating how many rows we are going to have and this is determined by counting how using len on elements to count the amount of rows there is going to be and than since we already know the column amount it is hard coded into the code but we could've done a similiar thing for the column if there is a varity on the column. 
    
    
    for i in range(len(elements)):
       self.tableWidget.setItem(i, 0, QTableWidgetItem(elements[i][0]))
       self.tableWidget.setItem(i, 1, QTableWidgetItem(elements[i][1]))
       self.tableWidget.setItem(i, 2, QTableWidgetItem(elements[i][2]))
     

This is the meat of the code so to speak. Where all of the major action is going on. The for statement is looping and placing the elements into its respective cell. This is done by using the setItem method and as you can see it is looped for the amount of arrays in elements using len to find that value.   
  
The majority of the rest of the code is just to set up the frame which is not so vital but now you can create tables from a .txt file which is amazing and can extend this even further and create some graphs using matplotlib which is built into PyGt5.

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Clojure - Basic Incanter](/posts/clojure-incanter/) [Python - Running Commands __](/posts/python-commands/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
