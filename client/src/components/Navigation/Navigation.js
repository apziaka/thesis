import React from 'react';
import Tilt from 'react-tilt';
import up from './up.png';


const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn){
	  return(
	  	<nav style={{display: 'flex', justifyContent: 'space-between'}}>
			<div className='pa3 ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 65 }} style={{ height: 100, width: 100 }} >
 			  <div className="Tilt-inner"><img alt="" src={up}/></div>
			</Tilt>
			</div>
			<p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'>Sign out</p>
		</nav>
	  );
	} else {
	  return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('home')} className='f3 link dim white underline pa3 pointer'>Home</p>
			<p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign In</p>
			<p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</p>
		</nav>
	  );

	}
	
}

export default Navigation;