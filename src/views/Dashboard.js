import { Line } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Members",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#fff"],
      borderColor: ["#000"],
      borderWidth: 1,
      tension: 0.5,
    },
  ],
};

const options = {
  color: "white",
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

function Dashboard() {
  return (
    <div className="flex flex-wrap justify-between w-5/6 mx-auto mt-10">
      <div className="">
        <Line
          className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl mt-10"
          data={data}
          options={options}
        />
      </div>
      <div className="">
        <Line
          className="bg-gradient-to-r from-blue-400 to-yellow-500 rounded-xl mt-10"
          data={data}
          options={options}
        />
      </div>
      <div className="">
        <Line
          className="bg-gradient-to-r from-blue-400 to-green-500 rounded-xl mt-10"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default Dashboard;
