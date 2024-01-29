from typing import Any, Optional

import pydantic


class Week(pydantic.BaseModel):
    week: int
    topic: str
    emoji: Optional[str] = None

    @staticmethod
    def from_csv_line(line: str) -> "Week":
        parts = line.split(",")
        assert len(parts) == (len(Week.model_fields) + 1)
        return Week(week=parts[1], emoji=parts[2], topic=parts[3])



class Year(pydantic.BaseModel):
    year: int
    weeks: list[Week]
    _week_numbers: set[int] = set()

    def _make_ordered(self):
        self.weeks.sort(key=lambda w: w.week)
    
    def prepare(self):
        self._make_ordered()
        for w in self.weeks:
            if 53 < w.week or w.week <= 0:
                raise ValueError("Invalid Week number, must be between 0 and 53")
            if w.week in self._week_numbers:
                raise ValueError(
                    f"Error in year {self.year}: Multiple weeks with the same week number ({w.week})"
                )
            self._week_numbers.add(w.week)
    
    def add_week(self, week: Week) -> None:
        if week.week in self._week_numbers:
            raise ValueError(
                    f"Error in year {self.year}: Multiple weeks with the same week number ({w.week})"
                )
        self.weeks.append(week)
        self._make_ordered()



class TopicsList(pydantic.BaseModel):
    years: list[Year]

    def __make_ordered(self):
        self.years.sort(key=lambda yr: yr.year)

    def prepare(self):
        self.__make_ordered()
        seen_year_numbers: set[int] = set()
        for yr in self.years:
            if yr.year < 1878 or 3000 < yr.year:
                raise ValueError(f"Year number probably not valid ({yr.year})")
            if yr.year in seen_year_numbers:
                raise ValueError(
                    f"Error in structure: Multiple Years with same year value ({yr.year})"
                )
            yr._make_ordered()
            seen_year_numbers.add(yr.year)