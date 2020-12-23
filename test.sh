#!/bin/bash
source ~/.bash_profile
unset http_proxy
unset https_proxy

# dev
#cat branchesInfo | awk -F"|" '{print $3}' | curl -s -X POST --data-binary @- http://localhost:3000/api/server?sep=`node -e 'console.log(encodeURI(","))'`

# prod
cat branchesInfo | awk -F"|" '{print $3}' | splitstr ,
#cat branchesInfo | awk -F"|" '{print $3}' | curl -s -X POST --data-binary @- https://splitstr.calbertts.vercel.app/api/server?sep=`node -e 'console.log(encodeURI(","))'`
