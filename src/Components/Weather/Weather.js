import React from "react";

const Weather = ({ description, city, error, temperature, humidity }) => {
  console.log("weather", temperature);
  return (
    <div className="weather">
      {city && <p>{city}</p>}
      {temperature && <p>{temperature} C</p>}
      {description && <p> {description}</p>}
      {humidity && <p>{humidity}% humidity </p>}
    </div>
  );
};

export default Weather;
