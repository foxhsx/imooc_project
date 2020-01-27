#!/bin/sh

GIT_HOME=/developer/git-repository/
DEST_PATH=/product/front/

if [ ! -n "$1" ];
then
    echo -e "Please input a project name! You can input as follows:"
    echo -e "./fe-deploy.sh admin-v2-fe"
    exit
fi

if [ $1 = "admin-v2-fe" ];
then
    echo -e "-------Enter Project------"
    cd $GIT_HOME$1
else
    echo -e "Invalid Project Name!"
    exit
fi

# clear dist
echo -e "-------Clear Dist------"
rm -rf ./dist

echo -e "-------Git Pull------"
git pull

echo -e "-------Yarn Install------"
yarn

echo -e "-------Yarn Run Dist------"
yarn run dist

if [ -d "./dist" ];
then
    echo -e "-------Clean Dest------"
    rm -rf $DEST_PATH/dist

    echo -e "-------Copy Dest------"
    # 要求线上目录里admin-v2-fe已经存在，否则会变成一个重命名
    cp -R ./dist $DEST_PATH/$1

    echo -e "-------Deploy Success------"
else
    echo -e "-------Deploy Fail------"
fi