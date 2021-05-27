import React from 'react'

const Navigation = ({onRouteChange}) => {
	return (
		<nav className="flex justify-end">
		  <p onClick={()=>onRouteChange('login')} className="i link f3 black grow pointer br2">Sign Out </p>
		 </nav>
	);
}
export default Navigation;