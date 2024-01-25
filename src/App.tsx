import './App.css';
import { ListItemButton } from '@mui/material';
import jsonData from "./topics.json";
import { TopicList } from './util/types';
import YearList from './components/YearList';



function App() {

  const topicList: TopicList = JSON.parse(JSON.stringify(jsonData));


  return (
    <div className="App max-w-3xl mx-auto">
      <h1 className='text-8xl text-vseth pb-6'> Topic of the Week</h1>
      <YearList topicList={topicList} />
    </div>
  );
}

export default App;
