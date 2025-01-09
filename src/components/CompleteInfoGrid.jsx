import CurrentLocationCard from "./CurrentLocationCard";
import UpcomingTempCard from "./UpcomingTempCard";
import { WeatherGrid } from "./WeatherGrid";

const futureData = [
  { day: "Monday", date: "12/07", temp: "30 C" },
  { day: "Tuesday", date: "13/07", temp: "31 C" },
  { day: "Wednesday", date: "14/07", temp: "32 C" },
  { day: "Thursday", date: "15/07", temp: "33 C" },
];

export default function CompleteInfoGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 m-4">
      <div className="col-span-1">
        <CurrentLocationCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          temperature="30 C"
          desc="Sunny"
          location="Bangalore"
          date="Saturday, 10:00 AM"
        />
      </div>
      <div className="col-span-1">
        <UpcomingTempCard data={futureData} />
      </div>
      <div className="col-span-2">
        <WeatherGrid />
      </div>
    </div>
  );
}
