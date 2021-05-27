import React,{Component} from 'react';
import Email from './Email';

class Signin extends Component {
constructor(props)
{
	super(props);
	this.state = {
		         };
}
render() {
	const { onRouteChange } = this.props;
	return(
		<div>
		<h1 className="b tc center f2"> Welcome to Weather APP !!! </h1>
		<article className="br2 ba dark-gray b--black-20 mv4 w-100 w-50-m w-25-l mw5 center shadow">
		<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      	<legend className="f4 fw6 ph0 mh0">Sign In</legend>
		     <Email />
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" fo="password">Password</label>
		        <input
		             className="b pa2 input-reset ba bg-transparent hover-black w-100" 
		             type="password" 
		             name="password"  
		             id="password"
		         />
		      </div>
		    </fieldset>
		    <div className="">
		        <input className="ml3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		               type="submit" 
		               value="Sign in"
		               onClick={()=>onRouteChange('Weather')}
		         />
		    </div>
	  </form>
	</main>
	</article>
	</div>
  )
}
}
export default Signin;
