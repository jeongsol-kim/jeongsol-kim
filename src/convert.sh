#!/bin/bash

search_dir=src/data/write
for filename in "$search_dir"/*.md
do
    jsfile="${filename/.md/.js}"
    # convert code block expression for js
    content=$(cat ${filename})
    content="${content//\`\`\`/\\\`\\\`\\\`}"
    # set outpath
    jsfile="${jsfile/write/projects}"
    echo $content
    echo -e "const post=\` \n${content}\n\`\n\nconst _post = post;\nexport { _post as post };" > ${jsfile}
done
