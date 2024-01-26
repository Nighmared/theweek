# Tools

This directory contains two utility scripts to convert the topics list to a csv file and back from a csv file to the json format.
These can be used to make suggestions more easily by editing the csv with a spreadsheet editor and open a pull request with an updated json file afterwards :)


## Usage

- Install required python packages either in a venv or simply by running
`pip install -r requirements.txt` from within the directory
- run `python toCSV.py` and a CSV file will be created in the tools directory
- edit CSV file
- run `python fromCSV.py` and a new JSON file will be created in the tools directory
- Suggest changes by opening a pull request on the repository which replaces `src/topics.json` with the newly generated file

