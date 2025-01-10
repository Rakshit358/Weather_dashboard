import { useState } from "react";
import CompleteInfoGrid from "./components/CompleteInfoGrid";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AirQualityContext,
  CityContext,
  CoordinateContext,
  FutureDaysContext,
  WeatherPropertiesContext,
} from "./context";
import MenuBar from "./components/MenuBar";
import AirQualityPage from "./components/AirQualityPage";
import SunInformationPage from "./components/SunInformationPage";
import NextDaysPage from "./components/NextDaysPage";

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
  const [airQuality, setAirQuality] = useState({
    CO: 0,
    NO: 0,
    NO2: 0,
    O3: 0,
    SO2: 0,
    PM2_5: 0,
    PM10: 0,
    NH3: 0,
  });
  const [futureDays, setFutureDays] = useState([{ date: 0, temperature: 0 }]);

  return (
    <AirQualityContext.Provider value={{ airQuality, setAirQuality }}>
      <FutureDaysContext.Provider value={{ futureDays, setFutureDays }}>
        <WeatherPropertiesContext.Provider
          value={{ weatherProperties, setWeatherProperties }}
        >
          <CoordinateContext.Provider value={{ coordinates, setCoordinates }}>
            <CityContext.Provider value={{ city, setCity }}>
              <div>
                <TopBar />
                <div className="text-3xl p-6 ml-4 font-mono">Weather Today</div>
                <CompleteInfoGrid />
                <div className="text-3xl p-6 ml-4 font-mono">More Details</div>

                {/* Route for Details Section */}
                <BrowserRouter>
                  <MenuBar />
                  <Routes>
                    <Route path="/" element={<AirQualityPage />} />
                    <Route path="/hourly" element={<SunInformationPage />} />
                    <Route path="/weekly" element={<NextDaysPage />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </CityContext.Provider>
          </CoordinateContext.Provider>
        </WeatherPropertiesContext.Provider>
      </FutureDaysContext.Provider>
    </AirQualityContext.Provider>
  );
}
