# script for changing email and year on posts.

find */*.html >> logfile.txt

while read i; do
    sed -i 's/sxh8083@g.rit.edu/salmanhossain500@gmail.com/g' $i
    sed -i 's/2016-17/2016-18/g' $i
done <logfile.txt
