import { useContext } from "react";
import { UniqueForecastDaysContext } from "../context";
import sunSVG from "../assets/sun.svg";
import cloudsSVG from "../assets/clouds.svg";
import rainSVG from "../assets/rain.svg";

export default function NextFiveDaysPage() {
  const { uniqueForecastDays } = useContext(UniqueForecastDaysContext);

  // Helper function to format date
  const formatDate = (dateString) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(dateString); // Parse the date string
    const day = date.getDate(); // Extract the day
    const month = monthNames[date.getMonth()]; // Convert month number to name
    return `${day} ${month} 2025`;
  };

  return (
    <div className="ml-10 mr-4 grid grid-cols-5 gap-6">
      {uniqueForecastDays.slice(1, 6).map((item, index) => (
        <div
          key={index}
          className="shadow-lg flex bg-gray-300 rounded-xl p-4 col-span-1 items-center justify-between border-b border-gray-300 py-2"
        >
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-600">
              {formatDate(item.date)}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                src={
                  item.desc.main.toLowerCase() === "clear"
                    ? sunSVG
                    : item.desc.main.toLowerCase() === "rain"
                    ? rainSVG
                    : cloudsSVG
                }
                alt={item.desc.main}
                className="w-10 h-10"
              />
            </div>
            <div>
              <div className="text-lg font-medium text-gray-800">
                {item.temperature}°C
              </div>
              <div className="text-lg font-normal text-slate-600">
                {item.desc.main}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
