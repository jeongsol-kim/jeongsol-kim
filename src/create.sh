#/bin/bash

# output file
file=src/data/post_list.js
# clear file
> ${file}
# create pre-javascripts
echo -e "export const PostList = [" >> ${file}

# create metadata for posts
i=0
for post in "src/data/write"/*.md
do
    # get title (read first line of md file)
    title=$(head -1 ${post})
    # assume that the title is written by #.
    # strip # and a whitespace
    title="${title:2}"

    # get thumbnail src (assume that thumbnail image is defined at third line.)
    thumbnail=$(sed -n '3p' ${post})
    thumbnail="${thumbnail#*(}"
    thumbnail="${thumbnail%)*}"

    # get basename
    basename="${post##*/}"  # cut longest matching with */ from beginning
    basename="${basename%.*}"  # cut shortest matching with .* from end

    prompt="{\n\tid: $i,\n\tpath: './projects/$basename',\
            \n\ttitle: '$title',\
            \n\tthumbnail: '$thumbnail',\
            \n\tcontent: require('./projects/$basename').post\n},"
    echo -e ${prompt} >> ${file}
    i=$(( i + 1 ))
done

# create post-javascripts
echo -e "];" >> ${file}