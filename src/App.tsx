import "./App.css";

import { ListItemButton } from "@mui/material";
import { TopicList } from "./util/types";
import YearList from "./components/YearList";
import jsonData from "./topics.json";

function App() {
  const topicList: TopicList = JSON.parse(JSON.stringify(jsonData));
  return (
    <>
      <div className="App max-w-3xl mx-auto mt-5">
        <h1 className="text-8xl text-vseth pb-6"> Topic of the Week</h1>
        <YearList topicList={topicList} />
      </div>
    </>
  );
}

export default App;
