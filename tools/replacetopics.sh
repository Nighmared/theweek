#!/bin/bash
gitroot=$(git rev-parse --show-toplevel)
toolspath="$gitroot/tools"
python $toolspath/fromCSV.py
cp $toolspath/new_topics.json $gitroot/app/topics.json
