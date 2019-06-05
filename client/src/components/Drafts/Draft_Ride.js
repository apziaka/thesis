import React from 'react';

const Ride = ({id, from, to, when, time, driverUsername, seatAvail, price, notes, stopovers}) => {
	return(
		<div className='tc bg-light-green dib br3 ma2 grow shadow-5'>
			<img alt='photo' src={`https://robohash.org/${driverUsername}?200x200`} />
			<div>
				<h1>{driverUsername}</h1>
				<h2>{id}</h2>
				<h2>{from}</h2>
				<h2>{to}</h2>
				<p>{when}</p>
				<h1>{price} $ </h1>


			</div>
		</div>
	);
}

export default Ride;