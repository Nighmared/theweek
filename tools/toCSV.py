import pydantic
from json import loads
from typing import Optional


class Week(pydantic.BaseModel):
    week: int
    topic: str
    emoji: Optional[str] = None

class Year(pydantic.BaseModel):
    year: int
    weeks: list[Week]

class TopicsList(pydantic.BaseModel):
    years: list[Year]




with open("../src/topics.json","r") as f:
    cont = f.read()
    obj = loads(cont)

main = TopicsList.model_validate(obj)


for yr in main.years:
    for w in yr.weeks:
        print(f"{yr.year} | {str(w.week).center(4)} | {w.emoji.ljust(4)} |{w.topic.center(20)}")