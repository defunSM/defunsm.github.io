


# Python - Parsing HTML with BeautifulSoup

[__Python - Reading and Writing Files](/posts/python-reading-writing-files/)   
[Python - Color in Terminal ___](/posts/python-color-in-terminal/)

December 28, 2016

## Python - Parsing HTML with BeautifulSoup

I wanted to gather a collection of all the links on a wikipedia page so I decided to code something up real quick. Luckily it is rather easy in python using BeautifulSoup. You'll need to download the python module bs4 first which you can do with pip...
    
    
    sudo pip install bs4
    

After the installing is completed. Go ahead and open up a file called webscraper.py and import requests and bs4. 
    
    
    import requests
    from bs4 import BeautifulSoup
    

To get the html of a document from the web we'll be using requests. The variable resp will contain all of the html for the site.
    
    
    link = 'https://en.wikipedia.org/wiki/Physics'
    resp = requests.get(link)
    

Now that we have all the html we'll begin to parse it using BeautifulSoup.
    
    
    soup = BeautifulSoup(resp.text, 'lxml')
    

soup is an object in which we can parse and manipulate to obtain all the href's that may be contained within the html like so.
    
    
    urls = []
      for h in soup.find_all('p'):
    
        a = h.find_all('a')
    
        for t in a:
    
          urls.append(t.attrs['href'])
    

This will place all the hrefs in the urls array. So than you can print all the urls you find but say you want to write them to a file instead you can do the following...
    
    
    f = open('urls.txt', 'w')
    
    for url in urls:
    
       f.write(link + url)
       f.write("\n")
    

The link is added in to the f.write so it shows the full url rather than just the /wiki/something. So now you have a bunch of urls in a file named urls.txt when you run the command. Of course you'll notice something when looking at the urls.txt is that there are citiation urls which you don't want. Well it is rather simple to remove that by filtering out based on "\#". So rewriting your for statement like this will filter out the cititation urls.
    
    
        for url in urls:
    
            if '#' in url:
                pass
            else:
                f.write(link + url)
                f.write("\n")
    

Oh and of course don't forget to close the file. Which I always do.
    
    
    f.close()
    

And that is pretty much it. Of course you can use optparse python module to make it so it takes an argument which can be the link and then generates the site and add on to this. So the full file should look something like this.
    
    
    #!/usr/bin/env python
    import requests
    from bs4 import BeautifulSoup
    
    def main():
    
        link = 'https://en.wikipedia.org/wiki/Physics'
        resp = requests.get(link)
        soup = BeautifulSoup(resp.text, 'lxml')
    
        urls = []
        for h in soup.find_all('p'):
    
            a = h.find_all('a')
    
            for t in a:
    
                urls.append(t.attrs['href'])
    
    
        f = open('urls.txt', 'w')
    
        for url in urls:
    
            if '#' in url:
                pass
            else:
                f.write(link + url)
                f.write("\n")
    
        f.close()
    
    if __name__=="__main__":
        main()
    
    

Now you can just run that and it'll generate the urls.txt file. Enjoy scraping the web.  
  
[WebScraper](https://github.com/defunSM/web-scraper)

**Tags:** [Python](/tags/Python/) [Code](/tags/Code/) [Guide](/tags/Guide/)

[__Python - Reading and Writing Files](/posts/python-reading-writing-files/) [Python - Color in Terminal __](/posts/python-color-in-terminal/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
