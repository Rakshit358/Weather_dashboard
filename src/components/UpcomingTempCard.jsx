import { useContext } from "react";
import { FutureDaysContext } from "../context";

export default function UpcomingTempCard() {
  const { futureDays } = useContext(FutureDaysContext);

  return (
    <div className="border border-black rounded-lg p-4 bg-gray-100 m-6">
      {futureDays.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-300 py-2"
        >
          {/* Left Section: Day and Date */}
          <div className="text-center">
            <div className="text-xl font-semibold">{item.date}</div>
            {/* <div className="text-sm text-gray-600">{item.date}  </div> */}
          </div>

          {/* Right Section: Temperature */}
          <div className="text-lg font-medium text-gray-800">
            {item.temperature}°C
          </div>
        </div>
      ))}
    </div>
  );
}
