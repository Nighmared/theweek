import json
import os
import configparser
from urllib.request import urlretrieve
from models import TopicsList, Week, Year
import loguru
logger =loguru.logger


curr_dir = os.path.dirname(__file__)

topics_file = os.path.join(curr_dir, "new_topics.json")

ini_file = os.path.join(curr_dir, "config.ini")
csv_file = os.path.join(curr_dir, "topics.csv")

if os.path.exists(ini_file):
    logger.info("Using google docs link :)")
    csv_file = os.path.join(curr_dir, "downloaded_topics.csv")
    config = configparser.ConfigParser()
    config.read(ini_file)
    file_link = config["gsuite"]["downloadlink"]
    urlretrieve(file_link,csv_file)


with open(csv_file, "r") as f:
    cont = f.read()

lines = cont.split("\n")


year_dict: dict[int, Year] = dict()

for line in lines:
    if line == "":
        continue
    parts = line.split(",")
    if len(parts) <= 2 or parts[2] == parts[3] == "":
        continue
    week = Week.from_csv_line(line)
    year_num = line.split(",")[0]
    if year_num not in year_dict:
        new_year = Year(year=year_num, weeks=[])
        new_year.prepare()
        year_dict[year_num] = new_year 
    year_dict[year_num].add_week(week)


main = TopicsList(years=list(year_dict.values()))
main.prepare()


with open(topics_file, "w") as f:
    json.dump(main.model_dump(), fp=f, indent=True, ensure_ascii=False)
