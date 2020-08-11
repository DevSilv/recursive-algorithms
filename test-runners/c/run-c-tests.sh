#!/bin/bash

# 0 - all tests passed
# 1 - error
# 2 - some tests failed

# Uncomment to debug
# set -x

scriptPath="${0}"
scriptDirPath="$(dirname ${scriptPath})"
testDirs="$(find ${scriptDirPath}/../../algorithms/ -type d -name 'c-tests')"
status=0
testDirsCount="$( echo ${testDirs} | wc -w )"
count=0
percent=0
cur=10

printf "[ "

for dir in ${testDirs}
do
    make --directory "${dir}" --no-print-directory

    if [[ "${?}" != 0 ]]
    then exit 1
    fi

    "${dir}"/a.out
    status="${?}"

    make clean --directory "${dir}" --no-print-directory

    if [[ "${?}" != 0 ]]
    then exit 1
    fi

    if [[ "${status}" != 0 ]]
    then exit 2
    fi

    count="$(( count + 1 ))"
    percent="$(( ${count} * 100 / ${testDirsCount} ))"
    
    while [[ "$(( ${cur} - ${percent} ))" -le 0 ]]
    do
        printf "${cur}%% "
        cur="$(( ${cur} + 10 ))"
    done
done

printf "]\n"