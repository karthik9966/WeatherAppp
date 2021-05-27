import React from 'react';
const Api_key="8fd1da419cb38c4883df942c99a274b4";
class Email extends React.Component{
	constructor(props){
		super(props);
		this.state={
			mx_found:false,
			format_valid:false,
			smtp_check:false,
			user:"",
			error:true
		};
	}
	makeApiCall = async () => {
		const email=document.getElementById("email-address").value;
		const api_call = await fetch(`http://apilayer.net/api/check?access_key=${Api_key}&email=${email}`);
	    const response = await api_call.json();
	    if(!response.smtp_check || !response.format_valid)
	    {
	    	alert("Invalid Email! Please use your active email");
	    }
	    else{
	    this.setState({
	    	mx_found:response.mx_found,
	    	user:response.user,
	    	smtp_check:response.smtp_check,
	    	format_valid:response.format_valid,
	    	error:false
	    },()=>{
	    	alert("Welcome "+this.state.user);
    });
	}
 }
	render(){
		const { onComponentChange } = this.props;
		return(
			<div className="mt3">
		       <label className="db fw6 lh-copy f6" fo="email-address">Email</label>
		        <input 
		           className="pa2 input-reset ba bg-transparent hover-black w-100" 
		           type="text" name="email-address"
		           id="email-address"
		           onBlur={this.makeApiCall}
		         />
		      </div>
		)
	}
}

export default Email;