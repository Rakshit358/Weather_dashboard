import { useContext, useEffect } from "react";
import { PopularCitiesContext } from "../context";
import { use } from "react";
import cloudSVG from "../assets/clouds.svg";
import sunSVG from "../assets/sun.svg";

export default function NextDaysPage() {
  const { popularCities, setPopularCities } = useContext(PopularCitiesContext);

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    // Iterate through each city in popularCities and fetch the weather for each one
    const updatedCities = await Promise.all(
      popularCities.map(async (city) => {
        const { lat, lon, name } = city; // Assuming each city object has lat, lon, and name
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          const { temp } = data.main; // Extract the temperature
          const { description } = data.weather[0]; // Extract the description

          return {
            ...city,
            temperature: (temp - 273.15).toFixed(2), // Update temperature
            description, // Update weather description
          };
        } else {
          console.error(`Error fetching weather for ${name}`);
          return city; // If there's an error, return the city unchanged
        }
      })
    );

    // Once all API calls complete, update the popularCities state
    setPopularCities(updatedCities);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getSVG = (description) => {
    if (
      description === "smoke" ||
      description === "haze" ||
      description === "dust" ||
      description === "fog" ||
      description === "sand" ||
      description === "clouds" ||
      description === "mist"
    ) {
      return cloudSVG;
    } else if (description === "clear") {
      return sunSVG;
    }
  };

  return (
    <div className=" ml-10 mr-4 p-4 mb-4">
      <h2 className="text-gray-800 text-lg m-2 font-semibold">
        Popular Cities
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {popularCities.map((city, index) => (
          <div
            key={index}
            className="col-span-1 p-4 bg-gray-300 rounded-lg shadow-lg hover:shadow-xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{city.name}</h3>
              <p className="text-md text-gray-800 font-semibold">
                {city.temperature}°C
              </p>
            </div>

            <div>
              <img src={getSVG(city.description)} h-10 w-10 />
              <p>{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
