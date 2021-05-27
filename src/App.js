import React, { Component } from 'react';
import Signin from './Signin';
import Navigation from './Navigation';
import Form from "./Form.js";
import Weather from "./Weather.js"
import Currenttime from "./Currenttime.js"

const Api_Key = "e8a58ee00e5ccf3676751bdde74adb74";

class App extends Component {
	constructor()
	{
		super();
		this.state={
				route: 'login',
				city: undefined,
		        country: undefined,
			    main: undefined,
			    celsius: undefined,
			    temp_max: null,
			    temp_min: null,
			    description: "",
			    error: false
		};
	}

	  calCelsius(temp) {
	    let cell = Math.floor(temp - 273.15);
	    return cell;
 	}
 	 getWeather = async e => {
     e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }
  };
	onRouteChange = (prop) =>
	{
		this.setState({route:prop});
	}
	render() {
	return(
		<div className="App">
		<Navigation onRouteChange={this.onRouteChange}/>
		  {this.state.route === 'login' ?
		  <Signin onRouteChange={this.onRouteChange}/>
		  :
		  <div className="tc">
  			<Form loadweather={this.getWeather} error={this.state.error} /> 
  			<Weather
	          cityname={this.state.city}
	          temp_celsius={this.state.celsius}
	          temp_max={this.state.temp_max}
	          temp_min={this.state.temp_min}
	          description={this.state.description}
           />
           <Currenttime />
          </div>
	    }
	   </div>
	);
   }
}
export default App;