#!/bin/sh

if [ $# -ne 1 ]
then
	read NAME
else
	NAME=$1
fi

DATE=`date "+%Y-%m-%d"`
FILE=$PWD/_posts/`echo $DATE-$NAME.md | sed 's/ /-/g'`
YAML="---\ntitle:\t\"$NAME\"\ndate:\t$DATE `date "+%H:%M:%S"`\ncategories:\n---\n"
echo $YAML > $FILE && vim $FILE
