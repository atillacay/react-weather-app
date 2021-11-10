/**
 * render weather data to cards and use theme prop to change card styles
 */

import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { ThemeContext } from "../../context/ThemeContext";
import CardHeader from "../CardHeader";

function Weather() {
  const { weather } = useContext(WeatherContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="row p-5">
      <CardHeader />
      {weather.map((item, index) => {
        return (
          <div
            key={index}
            className={`col-sm-12 col-md-6 col-lg-2 weather-cards ${
              theme !== "dark" && "weather-cards-light"
            }`}
          >
            <div className="row pt-5 pt-lg-3">
              <h5>{item.day}</h5>
            </div>
            <div className="row p-5 p-lg-2">
              <div className="col-sm-12 col-xl-6 temp d-flex justify-content-center align-items-center">
                <p>Gündüz {item.degree}&#8451;</p>
                <p>Gece {item.night}&#8451;</p>
              </div>
              <div className="col-sm-12 col-xl-6 sky  d-flex justify-content-center align-items-center">
                <span className="w-25 d-flex justify-content-center weatherIcon">
                  <img src={item.icon} alt={item.description} />
                </span>
                <p className="text-capitalize">{item.description}</p>
              </div>
            </div>
            <div className="row ps-0 pe-0 g-0 card-footer">
              <div className="col ">
                <span>Max</span>
                <span className="">{item.max}&#8451;</span>
              </div>
              <div className="col ">
                <span>Min</span>
                <span>{item.min}&#8451;</span>
              </div>
              <div className="col ">
                <span>Humidity</span>
                <span>{item.humidity}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Weather;
