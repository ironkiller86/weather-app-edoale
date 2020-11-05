import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        onChange={handlerFieldCity}
        type="text"
        placeholder="City"
        name="city"
        value={city}
      />
    </form>
  );
};

export default Form;
