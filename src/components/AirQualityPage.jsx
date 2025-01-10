import { useContext } from "react";
import AirCard from "./AirCard";
import { AirQualityContext } from "../context";

export default function AirQualityPage() {
  const getStatus = (title, value) => {
    if (title === "SO2") {
      if (value < 20) return "Good";
      if (value < 80) return "Fair";
      if (value < 250) return "Moderate";
      if (value < 350) return "Poor";
      return "Very Poor";
    }
    if (title === "NO2") {
      if (value < 40) return "Good";
      if (value < 70) return "Fair";
      if (value < 150) return "Moderate";
      if (value < 200) return "Poor";
      return "Very Poor";
    }
    if (title === "PM10") {
      if (value < 20) return "Good";
      if (value < 50) return "Fair";
      if (value < 100) return "Moderate";
      if (value < 200) return "Poor";
      return "Very Poor";
    }
    if (title === "PM2_5") {
      if (value < 10) return "Good";
      if (value < 25) return "Fair";
      if (value < 50) return "Moderate";
      if (value < 75) return "Poor";
      return "Very Poor";
    }
    if (title === "O3") {
      if (value < 60) return "Good";
      if (value < 100) return "Fair";
      if (value < 140) return "Moderate";
      if (value < 180) return "Poor";
      return "Very Poor";
    }
    if (title === "CO") {
      if (value < 4400) return "Good";
      if (value < 9400) return "Fair";
      if (value < 12400) return "Moderate";
      if (value < 15400) return "Poor";
      return "Very Poor";
    }
    return "No Effects";
  };

  const getSuggestion = (status) => {
    switch (status) {
      case "Good":
        return "The air quality is excellent. You can enjoy outdoor activities without concerns.";
      case "Fair":
        return "The air quality is fair. Consider limiting prolonged outdoor activities.";
      case "Moderate":
        return "The air quality is moderate. People with sensitivities should reduce outdoor exertion.";
      case "Poor":
        return "The air quality is poor. Avoid outdoor activities, especially for sensitive groups.";
      case "Very Poor":
        return "The air quality is very poor. Stay indoors and consider using air purifiers.";
      case "Dangerous":
        return "The air quality is hazardous. Everyone should avoid outdoor exposure.";
      default:
        return "No suggestion available. Stay safe!";
    }
  };

  const { airQuality } = useContext(AirQualityContext);

  return (
    <div>
      <div className="bg-gray-300 ml-10 mb-4 rounded-xl p-2 mr-2 flex flex-col items-center justify-center">
        <h1 className="text-slate-900 font-semibold text-lg">
          Overall Air Quality Index: {airQuality.PM2_5}
        </h1>
        <h2 className="text-slate-900 font-semibold text-md">
          Overall Status: {getStatus("PM2_5", airQuality.PM2_5)}
        </h2>
        <p className="text-slate-700 text-base mt-2 font-medium">
          {getSuggestion(getStatus("PM2_5", airQuality.PM2_5))}
        </p>
      </div>
      <div className="grid grid-cols-4 ml-10 gap-2 ">
        <div className="col-span-1">
          <AirCard
            title="CO"
            info={airQuality.CO}
            status={getStatus("CO", airQuality.CO)}
          />
          <AirCard
            title="NO"
            info={airQuality.NO}
            status={getStatus("NO", airQuality.NO)}
          />
        </div>
        <div className="col-span-1">
          <AirCard
            title="NO2"
            info={airQuality.NO2}
            status={getStatus("NO2", airQuality.NO2)}
          />
          <AirCard
            title="O3"
            info={airQuality.O3}
            status={getStatus("O3", airQuality.O3)}
          />
        </div>
        <div className="col-span-1">
          <AirCard
            title="SO2"
            info={airQuality.SO2}
            status={getStatus("SO2", airQuality.SO2)}
          />
          <AirCard
            title="PM2_5"
            info={airQuality.PM2_5}
            status={getStatus("PM2_5", airQuality.PM2_5)}
          />
        </div>
        <div className="col-span-1">
          <AirCard
            title="PM10"
            info={airQuality.PM10}
            status={getStatus("PM10", airQuality.PM10)}
          />
          <AirCard
            title="NH3"
            info={airQuality.NH3}
            status={getStatus("NH3", airQuality.NH3)}
          />
        </div>
      </div>
    </div>
  );
}
