/**
 * Fetch weather data from https://api.collectapi.com
 * pass cities context to cardHeader to track city selection and trigger axios call
 * comment out axios call to api and uncomment call to mockdata.json to test app with mock data
 */

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [cities, setCities] = useState({ city: "adana" });

  useEffect(() => {
    const getWeatherData = async () => {
      const CONFIG = {
        apiKey: "apikey 4eb5T7CNzUL2CYAi348Wwz:1pKFKZppG3J6tTQYSEx9in",
        lang: "tr",
        city: cities.city,
      };
      const response = await axios.get(
        `https://api.collectapi.com/weather/getWeather?data.lang=${CONFIG.lang}&data.city=${CONFIG.city}`,
         {
          headers: {
            "content-type": "application/json",
            authorization: CONFIG.apiKey,
          },
        }
      );
      /*const response = await axios('./mockdata.json')*/
      setWeather(response.data.result);
    };
    getWeatherData();
  }, [cities.city]);

  const values = { weather, setWeather, cities, setCities };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };
