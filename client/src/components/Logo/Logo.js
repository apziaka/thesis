import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div  >
			<Tilt className="Tilt" options={{ max : 40 }} style={{ height: 600, width: 600 }} >
 			  <div className='Tilt-logo'><img src={logo} alt={"logo"}/></div>
			</Tilt>
		</div>
	
		);
}

export default Logo;