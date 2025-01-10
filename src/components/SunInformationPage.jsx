import { useContext } from "react";
import { SunInformationContext } from "../context";
import sunSVG from "../assets/sunset.svg";

export default function SunInformationPage() {
  const { sunInformation } = useContext(SunInformationContext);

  const SunTimestamp = sunInformation.sunrise; // Timestamp in seconds
  console.log(SunTimestamp);
  const dateSunrise = new Date(SunTimestamp * 1000); // Convert to milliseconds
  const formattedTimeSunRise = dateSunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const SunSetTimestamp = sunInformation.sunset; // Timestamp in seconds
  const dateSunset = new Date(SunSetTimestamp * 1000); // Convert to milliseconds
  const formattedTimeSunset = dateSunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="ml-10 mr-4 rounded-lg p-2 mb-2">
      <h1 className="text-xl font-semibold"> Sun Information</h1>
      <div className="grid grid-cols-3 mt-4 gap-10">
        <div className="shadow-lg col-span-1 bg-gray-300 rounded-xl p-4 flex gap-4 justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
          <div>
            <div className="text-base text-slate-800 font-medium">Sunrise</div>
            <div className="text-2xl font-semibold">{formattedTimeSunRise}</div>
          </div>
        </div>

        <div className="shadow-lg col-span-1 bg-gray-300 rounded-xl p-4 flex gap-4 justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
          <div>
            <div className="text-base text-slate-800 font-medium">Sunset</div>
            <div className="text-2xl font-semibold">{formattedTimeSunset}</div>
          </div>
        </div>

        <div className="shadow-lg col-span-1 bg-gray-300 rounded-xl p-4 flex gap-4 justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
          <div>
            <div className="text-base text-slate-800 font-medium">
              Feels Like
            </div>
            <div className="text-2xl font-semibold">
              {sunInformation.feels_like}°C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
