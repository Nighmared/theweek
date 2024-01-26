from typing import Any, Optional

import pydantic


class Week(pydantic.BaseModel):
    week: int
    topic: str
    emoji: Optional[str] = None

    @staticmethod
    def from_csv_line(line: str) -> "Week":
        parts = line.split(",")
        assert len(parts) == (len(Week.__fields__) + 1)
        return Week(week=parts[1], emoji=parts[2], topic=parts[3])


class Year(pydantic.BaseModel):
    year: int
    weeks: list[Week]

    def _make_ordered(self):
        self.weeks.sort(key=lambda w: w.week)

    def __init__(self, **data: Any):
        super().__init__(**data)
        self._make_ordered()
        seen_week_numbers: set[int] = set()
        for w in self.weeks:
            if 53 < w.week or w.week <= 0:
                raise ValueError("Invalid Week number, must be between 0 and 53")
            if w.week in seen_week_numbers:
                raise ValueError(
                    f"Error in year {self.year}: Multiple weeks with the same week number ({w.week})"
                )
            seen_week_numbers.add(w.week)


class TopicsList(pydantic.BaseModel):
    years: list[Year]

    def __make_ordered(self):
        self.years.sort(key=lambda yr: yr.year)

    def __init__(self, **data: Any):
        super().__init__(**data)
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
