import { TopicList } from "./util/types";
import YearList from "./components/YearList";
import jsonData from "./topics.json";

function App() {
  const topicList: TopicList = JSON.parse(JSON.stringify(jsonData));
  return (
    <>
      <div className="max-w-4xl mx-auto mt-5 text-center">
        <h1 className="text-8xl text-vseth pb-6">Thema der Woche</h1>
        <YearList topicList={topicList} />
      </div>
    </>
  );
}

export default App;
