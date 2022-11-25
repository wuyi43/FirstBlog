#!/usr/bin/env.sh


 set -e

 npm run docs:build

 cd docs/.vitepress/dist
gitee action自动部署
 git init
 git add -A
 git commit -m 
 git push -f https://gitee.com/xwuyu/docs.git master:gh-page
 
 cd -
 
 rm -rf docs/.vitepress/dist
