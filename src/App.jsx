import { useState } from "react";
import CompleteInfoGrid from "./components/CompleteInfoGrid";
import TopBar from "./components/TopBar";
import {
  CityContext,
  CoordinateContext,
  WeatherPropertiesContext,
} from "./context";

export default function App() {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [weatherProperties, setWeatherProperties] = useState({
    windspeed: 0,
    temperature: 0,
    humidity: 0,
    pressure: 0,
    max_temperature: 0,
    min_temperature: 0,
    weather_desc: "",
  });

  return (
    <WeatherPropertiesContext.Provider
      value={{ weatherProperties, setWeatherProperties }}
    >
      <CoordinateContext.Provider value={{ coordinates, setCoordinates }}>
        <CityContext.Provider value={{ city, setCity }}>
          <div>
            <TopBar />
            <div className="text-3xl p-6 ml-4">Weather Today</div>
            <CompleteInfoGrid />
          </div>
        </CityContext.Provider>
      </CoordinateContext.Provider>
    </WeatherPropertiesContext.Provider>
  );
}
