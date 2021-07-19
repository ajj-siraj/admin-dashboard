import Charts from "../components/Charts";
import Report from "../components/Report";
import Stats from "../components/Stats";
import Announcements from "../components/Announcements";

function Dashboard() {

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="relative text-xl ml-5 mt-2 uppercase font-bold">
          Summary
          <span className="absolute top-full left-0 w-11/12 h-1 bg-gray-700 rounded-full"></span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-around w-11/12 mx-auto mt-7 bg-white rounded-md shadow-md">
        <Charts />
      </div>
      <div>
        <h1 className="relative text-xl ml-5 mt-2 uppercase font-bold">
          Overview
          <span className="absolute top-full left-0 w-11/12 h-1 bg-gray-700 rounded-full"></span>
        </h1>
      </div>
      <div className="flex flex-row mx-5">
        <div className="w-2/3 bg-white rounded-md shadow-md m-5">
          <Report />
        </div>
        <div className="w-1/4 bg-white rounded-md shadow-md m-5">
          <Stats />
        </div>
      </div>
      <div>
        <h1 className="relative text-xl ml-5 mt-2 uppercase font-bold">
          Announcements
          <span className="absolute top-full left-0 w-11/12 h-1 bg-gray-700 rounded-full"></span>
        </h1>
      </div>
      <div className="w-11/12 m-5 rounded-md shadow-md bg-white">
        <Announcements />
      </div>
    </div>
  );
}

export default Dashboard;
