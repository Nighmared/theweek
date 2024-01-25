import { Week } from "../util/types";

interface props {
  week: Week;
}

const WeekContainer: React.FC<props> = ({ week }) => {
  return (
    <div className="flex flex-row  text-4xl">
      <div className="flex" />
      <div>Woche {week.week.toString()}:&nbsp;</div>
      <div>
        {"  "} "<span className="text-vseth">{week.topic}</span>"
      </div>
    </div>
  );
};

export default WeekContainer;
