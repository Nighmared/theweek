import json
import os

from models import TopicsList, Week, Year

curr_dir = os.path.dirname(__file__)

topics_file = os.path.join(curr_dir, "new_topics.json")
csv_file = os.path.join(curr_dir, "topics.csv")


with open(csv_file, "r") as f:
    cont = f.read()

lines = cont.split("\n")


year_dict: dict[int, Year] = dict()

for line in lines:
    if line == "":
        continue
    week = Week.from_csv_line(line)
    year_num = line.split(",")[0]
    if year_num not in year_dict:
        year_dict[year_num] = Year(year=year_num, weeks=[])
    year_dict[year_num].weeks.append(week)


main = TopicsList(years=list(year_dict.values()))


with open(topics_file, "w") as f:
    json.dump(main.dict(), fp=f, indent=True, ensure_ascii=False)
