import { Week } from "../util/types";

interface props {
  week: Week;
}

const WeekContainer: React.FC<props> = ({ week }) => {
  return (
    <div className="flex flex-row  text-2xl sm:text-4xl pb-1 sm:pb-4">
      <div className="flex" />
      <div className="w-10 sm:w-14">{week.emoji && week.emoji}</div>
      <div>Woche {week.week.toString()}:&nbsp;</div>
      <div>
        &quot;<span className="text-vseth">{week.topic}</span>&quot;
      </div>
    </div>
  );
};

export default WeekContainer;
