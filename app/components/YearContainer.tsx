import { Week, Year } from "../util/types";

import WeekContainer from "./WeekContainer";

interface props {
  year: Year;
}

const YearContainer: React.FC<props> = ({ year }) => {
  return (
    <>
      <h2 className="text-3xl sm:text-5xl pb-2">{year.year.toString()}</h2>
      <div className="flex flex-row">
        <div className="flex flex-grow" />
        <div className="flex flex-col pl-2 ">
          {year.weeks.map((w: Week, i: number) => (
            <WeekContainer key={i} week={w} />
          ))}
        </div>
        <div className="flex flex-grow " />
      </div>
    </>
  );
};

export default YearContainer;
