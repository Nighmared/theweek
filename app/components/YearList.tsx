import { TopicList, Year } from "../util/types";

import YearContainer from "./YearContainer";

interface props {
  topicList: TopicList;
}

const YearList: React.FC<props> = ({ topicList }) => {
  return (
    <>
      <div>
        <ul className="flex flex-col justify-center">
          {topicList.years.map((year: Year, i: number) => (
            <YearContainer year={year} key={i} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default YearList;
