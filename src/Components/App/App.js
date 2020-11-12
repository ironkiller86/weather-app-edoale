import "./App.css";
import React from "react";

import WeatherBox from "../weatherBox";
import { useState, useEffect } from "react";
import Form from "../Form/Form";
const lang = "it";
const APIKEY = "";
const kelvinConstant = 273.15;
const App = () => {
  /**
   *
   * @param {*} city
   */

  const [weatherCity, setWeatherCity] = useState({
    name: "",
    temp: null,
    description: "",
    humidity: null,
    message: null,
    iconId: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("state", weatherCity);
    /**
     *
     */
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${"godrano"}&APPID=${APIKEY}&lang=${lang}`
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
          getWeather(weatherObj);
        } else {
          console.log(data.message);
          getWeather({ message: data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getWeather = (data) => {
    setWeatherCity(data);
    setLoading(false);
  };
  /**
   *
   */
  return (
    <div className="App">
      <p>Cerca una città</p>
      <Form getWeather={getWeather} />

      {loading ? (
        <Spinner />
      ) : weatherCity.message ? (
        <p>{weatherCity.message}</p>
      ) : (
        <WeatherBox data={weatherCity} />
      )}
    </div>
  );
};

const Spinner = () => {
  return (
    <div
      className="spinner spinner--steps2 icon-spinner-7"
      aria-hidden="true"
    ></div>
  );
};
export default App;
