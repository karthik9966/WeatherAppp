import React from "react";

const Weather = props => {
  return (
    <div className="">
      <div className="ma2 br2 ba dark-gray b--black-20 mv4 w-150 w-75-m w-25-l mw5 center shadow">
        <h1 className="tc pa2">{props.cityname}</h1>
        {props.temp_celsius ? (
          <h1 className="tc">{props.temp_celsius}&deg;</h1>
        ) : null}

        {maxminTemp(props.temp_min, props.temp_max)}
        <h4 className="tc">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3 className="tc">
        <span className="pa2">{min}&deg;</span>
        <span className="pa2">{max}&deg;</span>
      </h3>
    );
  }
}