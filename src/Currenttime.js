import React from 'react'

class Currenttime extends React.Component{
	constructor(){
		super();
		this.state={
			currentDateTime:"",
			dayOfTheWeek:"",
			timeZoneName:""
		};
	}
	currenttime= async ()=>{
		const api = await fetch(`http://worldclockapi.com/api/json/utc/now`);
		const response= await api.json();
		this.setState({
			currentDateTime:response.currentDateTime,
			dayOfTheWeek:response.dayOfTheWeek,
			timeZoneName:response.timeZoneName
		});
	}
	componentDidMount(){
		this.currenttime();
	}
    render(){
		return(
			<div>
				<h2 className="tc ma2 f2">Login Details</h2>
				<p className="tc ma2 f5">Date & Time: {this.state.currentDateTime}</p>
				<p className="tc ma2 f5">Day: 		 {this.state.dayOfTheWeek}</p>
				<p className="tc ma2 f5">TimeZone:    {this.state.timeZoneName}</p>
			</div>

		)
	}
}
export default Currenttime;