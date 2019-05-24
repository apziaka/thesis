import React from 'react';

const MainButtons  = ({ onRouteChange }) => {
	return (
		<div>
			<button onClick={() => onRouteChange('rides')} className='pa1 tc grow f3 bw0 link ph3 pv5 mb13 dib white bg-dark-blue shadow-5'>Search for your ride</button>
    		<button onClick={() => onRouteChange('offers')} className='tc ma5 grow f3 bw0 link ph5 pv5 mb13 dib white bg-dark-blue shadow-5'>Offer a ride</button>
    	</div>
	);
}

export default MainButtons;
