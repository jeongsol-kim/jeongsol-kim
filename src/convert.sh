#!/bin/bash

search_dir=src/data/write
for filename in "$search_dir"/*.md
do
    jsfile="${filename/.md/.js}"
    jsfile="${jsfile/write/projects}"
    echo -e "const post=\` \n $(cat ${filename})\`\n\n const _post = post;\n export { _post as post };" > ${jsfile}
done
