import os
from json import loads

from models import TopicsList

curr_dir = os.path.dirname(__file__)

topics_file = os.path.join(curr_dir, "../app/topics.json")
csv_file = os.path.join(curr_dir, "topics.csv")


with open(topics_file, "r") as f:
    cont = f.read()
    obj = loads(cont)

main = TopicsList.parse_obj(obj)


with open(csv_file, "w") as f:
    for yr in main.years:
        last_wk = 0
        for wk in yr.weeks:
            for i in range(last_wk + 1, wk.week):
                f.write(f"{yr.year},{i}\n")
            f.write(f"{yr.year},{wk.week},{wk.emoji},{wk.topic}\n")
            last_wk = wk.week
        for i in range(last_wk, 53):
            f.write(f"{yr.year},{i}\n")
