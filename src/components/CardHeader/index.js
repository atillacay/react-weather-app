/**
 * cities are exported from cityList.js mapped and sorted(a-z) in to a dropdown
 * @returns CardHeader component that renders city selector dropdown and theme switcher
 */



import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { cityList } from "../../context/cityList.js";


function CardHeader() {
  const { setCoord } = useContext(WeatherContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const moon = <FontAwesomeIcon icon={faMoon} />;
  const sun = <FontAwesomeIcon icon={faSun} />;

  const selectedCity = (e) => {
    let [selectedCity] = cityList.filter(
      (item) => e.target.value === item.city
    );
    setCoord({
      city: selectedCity.city,
    });
  };

  return (
    <div className="col-12 card-header d-flex justify-content-between">
      <div className="text-start">
        <label htmlFor="selectCity" className="me-2">
          Şehir
        </label>
        <select
          name="selectCity"
          id="selectCity"
          className="cities"
          onChange={(id) => {
            selectedCity(id);
          }}
        >
          {cityList
            .map((item) => item.city)
            .sort()
            .map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
      </div>
      <div className="text-end">
        <p onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        data-bs-toggle="tooltip"
        title={theme === 'dark' ? 'Light Theme': 'Dark Theme'}
        >
          {theme === "dark" ? sun : moon}
        </p>
       </div>
     
    </div>
  );
}

export default CardHeader;
