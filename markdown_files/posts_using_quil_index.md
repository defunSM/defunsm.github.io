


# Graphics using Quil in Clojure \(Part 1\)

[__Getting Started with Clojure](/posts/getting-started-with-clojure/)   
[Creating JFrames using Swing APIs in Clojure \(Part 2\) ___](/posts/2016-08-31-Using_Swing_Part_2/)

September 1, 2016

## Graphics using Quil in Clojure \(Part 1\)

I stumbled upon [quil](http://quil.info/) which can be used to generate rather interesting graphics.

![quil](https://defunsm.github.io/img/quilsecond.png)

The way you start a quil project is the following...
    
    
    lein new quil newquil-project
    

Once you have done that you should have the project and you can cd to it.
    
    
    cd newquil-project
    

If you check the project.clj you should see that quil is added as a dependency. Add the main function in the defproject to the following. So your project.clj should now look like this.
    
    
    (defproject newquil-project "0.1.0-SNAPSHOT"
      :description "FIXME: write description"
      :url "http://example.com/FIXME"
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [quil "2.4.0"]]
      :main newquil-project.core) ;; add this
    

Now you can view what you are starting with by running...
    
    
    lein run
    

You should see a circle changing colors as its orbiting the center of the applet. Now close the applet and clear the entire thing and lets work with a cool example from the quil github repo. So remove everything but the name space and add the following so your core.clj should look like this.
    
    
    (defn setup []
      (q/frame-rate 1)                    ;; Set framerate to 1 FPS (I would set this to 20)
      (q/background 200))                 ;; Set the background colour to
                                          ;; a nice shade of grey.
    (defn draw []
      (q/stroke (q/random 255))             ;; Set the stroke colour to a random grey
      (q/stroke-weight (q/random 10))       ;; Set the stroke thickness randomly
      (q/fill (q/random 255))               ;; Set the fill colour to a random grey
    
      (let [diam (q/random 100)             ;; Set the diameter to a value between 0 and 100
            x    (q/random (q/width))       ;; Set the x coord randomly within the sketch
            y    (q/random (q/height))]     ;; Set the y coord randomly within the sketch
        (q/ellipse x y diam diam)))         ;; Draw a circle at x y with the correct diameter
    
    (q/defsketch example                  ;; Define a new sketch named example
      :title "Oh so many grey circles"    ;; Set the title of the sketch
      :settings #(q/smooth 2)             ;; Turn on anti-aliasing
      :setup setup                        ;; Specify the setup fn
      :draw draw                          ;; Specify the draw fn
      :size [323 200])                    ;; You struggle to beat the golden ratio (640 by 480)
    

Now I dont really prefer the golden ratio so I like changing the size to 640 to 480. As well as changing the frame rate to 20. So the circles pop up faster. Now you can run it and see the grey circles popup in the applet. Thats pretty neat. However what If I wanted to control when these circles by clicking on the applet? We could do that rather easily. Just add a condition in the draw function such as the following...
    
    
    (defn draw []
      (q/stroke (q/random 255))             ;; Set the stroke colour to a random grey
      (q/stroke-weight (q/random 10))       ;; Set the stroke thickness randomly
      (q/fill (q/random 255))               ;; Set the fill colour to a random grey
    
      (if (q/mouse-pressed?)                    ;; add this condition.
        (do (let [diam (q/random 100)             ;; Set the diameter to a value between 0 and 100
                  x    (q/random (q/width))       ;; Set the x coord randomly within the sketch
                  y    (q/random (q/height))]     ;; Set the y coord randomly within the sketch
              (q/ellipse x y diam diam)))))) ;; Draw a circle at x y with the correct diameter
    

But why stop there what if you want circles to pop up at where you click on the applet? Using \(q/mouse-x\) and \(q/mouse-y\) you can easily do this by changing draw to this.
    
    
    (defn draw []
      (q/stroke (q/random 255))             ;; Set the stroke colour to a random grey
      (q/stroke-weight (q/random 10))       ;; Set the stroke thickness randomly
      (q/fill (q/random 255))               ;; Set the fill colour to a random grey
    
      (if (q/mouse-pressed?)                    ;; add this condition.
        (do (let [diam (q/random 100)]
              (q/ellipse (q/mouse-x) (q/mouse-y) diam diam))))) ;; Draw a circle at x y with the correct diameter
    

Now that you have a cool drawing tool that makes circles\!

**Tags:** [Graphics](/tags/Graphics/) [Clojure](/tags/Clojure/) [Code](/tags/Code/)

[__Getting Started with Clojure](/posts/getting-started-with-clojure/) [Creating JFrames using Swing APIs in Clojure \(Part 2\) __](/posts/2016-08-31-Using_Swing_Part_2/)

[__](https://github.com/defunSM)[__](https://www.facebook.com/salman.hossain.944)[__](https://plus.google.com/u/0/109736817709668742056)[__](https://twitter.com/SmSalmanHossain)[__](https://www.linkedin.com/in/salman-hossain)

 
