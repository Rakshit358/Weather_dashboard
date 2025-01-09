import { useContext } from "react";
import {
  CityContext,
  CoordinateContext,
  WeatherPropertiesContext,
} from "../context";

export default function SearchBar() {
  const { city, setCity } = useContext(CityContext);
  const { coordinates, setCoordinates } = useContext(CoordinateContext);
  const { weatherProperties, setWeatherProperties } = useContext(
    WeatherPropertiesContext
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(city);
    fetchLocation();
  };

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setWeatherProperties({
        windspeed: data.wind.speed,
        temperature: data.main.temp - 273.15,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        max_temperature: data.main.temp_max - 273.15,
        min_temperature: data.main.temp_min - 273.15,
        weather_desc: data.weather[0].description,
      });
    }
  };

  const fetchLocation = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data[0]);
    setCoordinates({ lat: data[0].lat, lon: data[0].lon });
    fetchWeather();
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="w-96 flex text-black border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
        <input
          type="search"
          id="default-search"
          className="w-full text-black border-none outline-none"
          placeholder="Search Mockups, Logos..."
          required
          onChange={handleChange} // Update state on input change
          value={city} // Controlled input
        />
        <button
          type="submit"
          onClick={handleSearch} // Log city state on click
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded-2xl inline-flex items-center"
        >
          Search
        </button>
      </div>
    </div>
  );
}
