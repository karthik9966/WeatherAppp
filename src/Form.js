import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="justify-center">
    <h1 className="tc"> Enter city and country </h1>
    <div className="">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="ma4">
          <div className="items-center">
            <input
              type="text"
              className="justify-center pv3 shadow"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="items-center">
            <input
              type="text"
              className="justify-center items-center pv3"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="pv3">
            <button className="pv2 input-reset b--black bg-transparent grow f6">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;