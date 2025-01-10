import { useState } from "react";
import CompleteInfoGrid from "./components/CompleteInfoGrid";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AirQualityContext,
  CityContext,
  CoordinateContext,
  FutureDaysContext,
  PopularCitiesContext,
  SunInformationContext,
  UniqueForecastDaysContext,
  WeatherPropertiesContext,
} from "./context";
import MenuBar from "./components/MenuBar";
import AirQualityPage from "./components/AirQualityPage";
import SunInformationPage from "./components/SunInformationPage";
import NextDaysPage from "./components/NextDaysPage";
import NextFiveDaysPage from "./components/NextFiveDaysPage";

export default function App() {
  const [uniqueForecastDays, setUniqueForecastDays] = useState([]);
  const [city, setCity] = useState("");
  const [popularCities, setPopularCities] = useState([
    {
      name: "Mumbai",
      temperature: 0,
      description: "",
      lat: "19.076090",
      lon: "72.877426",
    },
    {
      name: "Delhi", // Add the name here
      temperature: 0,
      description: "",
      lat: "28.704060",
      lon: "77.102493",
    },
    {
      name: "Kolkata", // Add the name here
      temperature: 0,
      description: "",
      lat: "22.572645",
      lon: "88.363892",
    },
    {
      name: "Chennai", // Add the name here
      temperature: 0,
      description: "",
      lat: "13.082680",
      lon: "80.270721",
    },
  ]);

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
  const [sunInformation, setSunInformation] = useState({
    sunrise: 0,
    sunset: 0,
    feels_like: 0,
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
    <UniqueForecastDaysContext.Provider
      value={{ uniqueForecastDays, setUniqueForecastDays }}
    >
      <PopularCitiesContext.Provider
        value={{ popularCities, setPopularCities }}
      >
        <SunInformationContext.Provider
          value={{ sunInformation, setSunInformation }}
        >
          <AirQualityContext.Provider value={{ airQuality, setAirQuality }}>
            <FutureDaysContext.Provider value={{ futureDays, setFutureDays }}>
              <WeatherPropertiesContext.Provider
                value={{ weatherProperties, setWeatherProperties }}
              >
                <CoordinateContext.Provider
                  value={{ coordinates, setCoordinates }}
                >
                  <CityContext.Provider value={{ city, setCity }}>
                    <div>
                      <TopBar />
                      <div className="text-3xl p-6 ml-4 font-mono">
                        Weather Today
                      </div>
                      <CompleteInfoGrid />
                      <div className="text-3xl p-6 ml-4 font-mono">
                        More Details
                      </div>

                      {/* Route for Details Section */}
                      <BrowserRouter>
                        <MenuBar />
                        <Routes>
                          <Route path="/" element={<AirQualityPage />} />
                          <Route
                            path="/hourly"
                            element={<SunInformationPage />}
                          />
                          <Route path="/weekly" element={<NextDaysPage />} />
                          <Route
                            path="/nextFiveDays"
                            element={<NextFiveDaysPage />}
                          />
                        </Routes>
                      </BrowserRouter>
                      <h1 className="text-center m-2 font-bold text-gray-600">
                        © Designed and Created by Rakshit
                      </h1>
                    </div>
                  </CityContext.Provider>
                </CoordinateContext.Provider>
              </WeatherPropertiesContext.Provider>
            </FutureDaysContext.Provider>
          </AirQualityContext.Provider>
        </SunInformationContext.Provider>
      </PopularCitiesContext.Provider>
    </UniqueForecastDaysContext.Provider>
  );
}
