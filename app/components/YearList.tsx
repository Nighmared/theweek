import { TopicList, Year } from "../util/types";

import { List } from "@mui/material";
import YearContainer from "./YearContainer";

interface props {
  topicList: TopicList;
}

const YearList: React.FC<props> = ({ topicList }) => {
  return (
    <>
      <List className="flex flex-col justify-center ">
        {topicList.years.map((year: Year, i: number) => (
          <YearContainer year={year} key={i} />
        ))}
      </List>
    </>
  );
};

export default YearList;
