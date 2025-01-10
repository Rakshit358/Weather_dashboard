import { useContext } from "react";
import { CityContext, WeatherPropertiesContext } from "../context";

export default function CurrentLocation(props) {
  const { city } = useContext(CityContext);
  const { weatherProperties } = useContext(WeatherPropertiesContext);
  const now = new Date();
  const date = now.getDate(); // Returns a number between 1 and 31
  const month = now.getMonth() + 1; // Returns a number between 0 and 11, so adding 1 makes it 1-12
  const year = now.getFullYear();
  const day = now.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[day];

  return (
    <div className="border shadow-md border-black rounded-lg p-4 bg-gray-100 m-6">
      <div className="p-4">{props.icon}</div>
      <div className="text-4xl font-semibold p-2">
        {weatherProperties.temperature.toFixed(2)}°C
      </div>
      <div className="text-base p-2">{weatherProperties.weather_desc}</div>
      <div className="border-b border-black m-3"></div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <div className="text-base p-2">{city}</div>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>

        <div className="text-base p-2">{`${date}/${month}/${year}, ${dayName}`}</div>
      </div>
    </div>
  );
}
