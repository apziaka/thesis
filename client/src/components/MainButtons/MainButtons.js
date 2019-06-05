import React from 'react';
import './MainButtons.css';

const MainButtons  = ({ onRouteChange }) => {
	return (
		<div className= 'mainbuttons'>
			<button onClick={() => onRouteChange('rides')} className='pa1 tc grow f3 bw0 link ph3 pv5 mb13 dib white bg-dark-blue shadow-5'>Search for your ride</button>
    		<button onClick={() => onRouteChange('offers')} className='tc ma5 grow f3 bw0 link ph5 pv5 mb13 dib white bg-dark-blue shadow-5'>Offer a ride</button>
    		<button onClick={() => onRouteChange('map')} className='tc ma5 grow f3 bw0 link ph5 pv5 mb13 dib white bg-dark-blue shadow-5'>Show the Mapp</button>
    		<button onClick={() => onRouteChange('profile')} className='tc ma5 grow f3 bw0 link ph5 pv5 mb13 dib white bg-dark-blue shadow-5'>Profile</button>
    	</div>
	);
}

export default MainButtons;
