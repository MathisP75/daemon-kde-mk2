#!/bin/bash

for f in */*.svg;
do
    if [ ! -h $f ] 
        then
            echo "Changing color of $f ..."
            sed -i -e 's/#e6e6e6/#5DF4FE/g' "$f";
    fi
done

#  /    regex       /  replacements/    flags   
# s/    \"#.    \{6\}   /  \"#16a085   /    g
#               match 6 chars
