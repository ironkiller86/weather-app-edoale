import React from "react";

const Weather = ({
  description,
  city,
  error,
  temperature,
  humidity,
  iconId,
}) => {
  console.log("weather", temperature, iconId);
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
