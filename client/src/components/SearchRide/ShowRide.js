import React from 'react';

const ShowRide = ({id, from, to, when, notes}) => {
	return(
		<div className=" dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
			
				<h2>{id}</h2>
				<p>{from}</p>
				<p>{to}</p>
				<p>{when}</p>
				<h1>{notes}</h1>
		
		</div>
	);
}

export default ShowRide;