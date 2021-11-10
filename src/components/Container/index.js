/**
 * change theme for the app container
 */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Weather from "../Weather/Weather";

function Container() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`App container ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <Weather />
    </div>
  );
}

export default Container;
