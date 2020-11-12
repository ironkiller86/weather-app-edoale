import React, { useState } from "react";
import "./Form.css";
const lang = "it";
const APIKEY = "93abd6fd23fb0a267160c5a2015e810b";
const kelvinConstant = 273.15;
const Form = (props) => {
  const [city, setCity] = useState("");
  /**
   *
   * @param {*} evt
   */
  const handlerFieldCity = (evt) => {
    setCity(evt.target.value);
  };
  const getWeather = (evt) => {
    evt.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&lang=${lang}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== "404") {
          const {
            main: { humidity, temp },
            weather,
            name,
          } = data;
          console.log(humidity, temp, weather[0].description, name);
          let tempCelsius = Number.parseFloat(
            temp - kelvinConstant
          ).toPrecision(4);
          let weatherObj = {
            name,
            temp: tempCelsius,
            description: weather[0].description,
            iconId: weather[0].icon,
            humidity,
          };
          props.getWeather(weatherObj);
        } else {
          console.log(data.message);
          props.getWeather({ message: data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "45%" }} />
      <form onSubmit={getWeather}>
        <input
          className={"fieldCity"}
          onChange={handlerFieldCity}
          type="text"
          placeholder="Città"
          name="city"
          value={city}
        />
        <button className="btnForm" type="submit">
          Cerca
        </button>
      </form>
      <div style={{ width: "45%" }} />
    </div>
  );
};

export default Form;
