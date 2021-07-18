import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

function Stats() {
  let [cutout, setCutout] = useState("95%");
  let [animClass, setAnim] = useState("animate-fadeOut2");

  let data = {
    labels: ["Success", "Fail"],
    datasets: [
      {
        label: "Customer Conversion",
        data: ["63", "37"],
        backgroundColor: ["#44ef15", "#d0cece"],
        borderColor: ["#000"],
        borderWidth: 0.1,
        cutout: cutout,
      },
    ],
  };

  const options = {
    animations: {
      easing: "easeInQuart",
      from: "95%",
      to: "98%",
    },
    animation: {
      duration: 500,
      animateScale: true,
    },
    plugins: {
      tooltip: false,
      legend: false,
    },
  };

  function handleHover() {
    setCutout("75%");
    setAnim("animate-fadeIn2");
  }

  function handleUnhover() {
    setCutout("95%");
    setAnim("animate-fadeOut2");
  }

  return (
    <>
      <h2 className="text-center text-gray-700 font-bold m-5">Marketing Campaign Results</h2>
      <div className="relative p-5" onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
        <div className={`${animClass} absolute top-1/4 left-1/2 text-center`}>
          <div className="relative -left-1/2">
            <span className="text-lg text-gray-500 font-semibold">Customer Conversion Rate</span>
          </div>
          <div className="relative -left-1/2 text-green-700">
            <span>67%</span>
          </div>
        </div>
        <Doughnut className="transition-all" data={data} options={options} />
      </div>
    </>
  );
}

export default Stats;
