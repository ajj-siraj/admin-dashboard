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
  plugins: { legend: false },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

function Charts() {
  return (
    <>
      <div className="relative mx-5 my-8">
        <div className="absolute left-1/2">
          <h2 className="relative -left-1/2 text-white text-shadow-1 text-center font-semibold mb-2 text-xl">
            Profits
          </h2>
        </div>
        <Line
          className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl"
          data={data}
          options={options}
        />
      </div>
      <div className="relative mx-5 my-8">
        <div className="absolute left-1/2">
          <h2 className="relative -left-1/2 text-white text-shadow-1 text-center font-semibold mb-2 text-xl">
            Expenses
          </h2>
        </div>
        <Line
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl"
          data={data}
          options={options}
        />
      </div>
      <div className="relative mx-5 my-8">
        <div className="absolute left-1/2">
          <h2 className="relative -left-1/2 text-white text-shadow-1 text-center font-semibold mb-2 text-xl">
            Sales
          </h2>
        </div>
        <Line
          className="bg-gradient-to-r from-red-400 to-pink-500 rounded-xl"
          data={data}
          options={options}
        />
      </div>
    </>
  );
}

export default Charts;
