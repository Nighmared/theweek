import { TopicList, Year } from "../util/types";

import YearContainer from "./YearContainer";

interface props {
  topicList: TopicList;
}

const YearList: React.FC<props> = ({ topicList }) => {
  return (
    <>
      <div className="flex flex-row">
      <div className=" flex-grow"/>
        <ul className="flex flex-col justify-center">
          {topicList.years.map((year: Year, i: number) => (
            <YearContainer year={year} key={i} />
          ))}
        </ul>
        <div className=" flex-grow "/>
      </div>
    </>
  );
};

export default YearList;
