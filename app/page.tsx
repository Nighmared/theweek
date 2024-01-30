import Image from "next/image";
import Link from "next/link";
import { TopicList } from "./util/types";
import YearList from "./components/YearList";
import icon from "./github.svg";
import jsonData from "./topics.json";

function App() {
  const topicList: TopicList = JSON.parse(JSON.stringify(jsonData));
  return (
    <>
      <main className="flex flex-col text-center pt-5 ">
        <h1 className="text-4xl sm:text-7xl lg:text-8xl text-vseth pb-3">
          Thema der Woche
        </h1>
        <div className="max-w-4xl mx-auto w-full">
          <YearList topicList={topicList} />
        </div>
        <footer className="px-5 my-10 text-xl sm:text-2xl w-full flex flex-row">
          <div className="flex-grow" />
          <Link
            className=" border-b border-dotted"
            href="https://github.com/Nighmared/theweek"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="size-5 sm:size-8 inline-block pb-1 pr-1"
              src={icon}
              alt="Logo of GitHub"
            />
            Source on GitHub
          </Link>
          <div className="flex-grow" />
        </footer>
      </main>
    </>
  );
}

export default App;
