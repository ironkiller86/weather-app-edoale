import "./styles.css";
import React from "react";

const WeatherBox = (props) => {
  const { temp, name, iconId } = props.data;

  return (
    <div className="weather-wrapper">
      <div className="weather-card madrid">
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
            alt="im not found"
          />
        </div>
        <h1>{temp}º</h1>
        <p>{name} </p>
      </div>
    </div>
  );
};
export default WeatherBox;
