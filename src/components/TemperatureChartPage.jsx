import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { FutureDaysContext } from "../context";

export default function TemperatureChartPage() {
  const { futureDays } = React.useContext(FutureDaysContext);

  // Extracting time and temperature from futureDays
  const timeLabels = futureDays.map((item) => item.date); // x-axis labels (time)
  const temperatures = futureDays.map((item) => item.temperature); // y-axis data (temperature)

  return (
    <div className="bg-gray-200 ml-10 mr-4 p-4 rounded-lg">
      <h2 className="text-slate-800 font-semibold text-xl mb-4">
        Temperature for Next Hours
      </h2>
      <BarChart
        series={[{ data: temperatures, label: "Temperature (°C)" }]}
        height={300}
        xAxis={[{ data: timeLabels, scaleType: "band", label: "Time (hh:mm)" }]}
        margin={{ top: 20, bottom: 50, left: 50, right: 20 }}
      />
    </div>
  );
}
