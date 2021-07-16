import Charts from "../components/Charts";
import Report from "../components/Report";
import Stats from "../components/Stats";

function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-between w-5/6 mx-auto mt-10"><Charts /></div>
      <div className="flex flex-row">
        <div className="w-3/4"><Report /></div>
        <div className="w-1/4"><Stats /></div>
      </div>
    </div>
  );
}

export default Dashboard;
