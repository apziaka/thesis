import React from 'react';
import Ride from './Ride';


const ShowRides = ({ rides }) =>{ 

	return(
		<div> {
			rides.map((user, i) => {

				return (
					<Ride 
						key={i} 
						id={rides[i].id} 
						from={rides[i].from} 
						to={rides[i].to} 
						when={rides[i].when}
						time={rides[i].time}
						seatAvail={rides[i].seatAvail}
						price={rides[i].price}
						driverUsername={rides[i].driverUsername}
						stopovers={rides[i].stopovers}
						notes={rides[i].notes}
					/>
				)
			})
		}
		</div>
	);
}

export default ShowRides;
