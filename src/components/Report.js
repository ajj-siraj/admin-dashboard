import { Bar } from "react-chartjs-2";

const data = {
  labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "Dataset 1",
      data: [15, 7, -8, -19, 58, 4, -24],
      borderColor: 'red',
      backgroundColor: 'pink'
    },
    {
      label: "Dataset 2",
      data: [48, -19, 29, 39, -58, 33, 11],
      borderColor: 'blue',
      backgroundColor: 'purple',
    },
  ],
};


function Report() {
  return (
    <>
      <div>
        <Bar data={data} />
      </div>
    </>
  );
}

export default Report;
