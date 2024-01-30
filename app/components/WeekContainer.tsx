import { Week } from "../util/types";

interface props {
  week: Week;
}

const WeekContainer: React.FC<props> = ({ week }) => {
  return (
    <div className="flex flex-row  text-xl sm:text-4xl pb-1 sm:pb-4 items-center">
      <div className="w-10 sm:w-14">{week.emoji}</div>
      <div className="break-keep">Woche {week.week.toString()}:&nbsp;</div>
        &quot;<span className="text-vseth">{week.topic}</span>&quot;
    </div>
  );
};

export default WeekContainer;
