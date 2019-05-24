app.post('/offerride', (req, res) => {
 	const { rideFrom, rideTo, rideStopovers, rideDate, rideTime, rideSeatsAvail, rideDriver, rideNotes} = req.body;
 	//console.log(rideFrom);
 	//console.log(rideTo);
 	//console.log(rideStopovers);
 	//console.log(rideDate);
 	//console.log(rideTime);
 	//console.log(rideSeatsAvail);
 	//console.log(rideDriver);
 	//console.log(rideNotes);
 	if (!rideFrom || !rideTo || !rideStopovers || !rideDate || !rideTime || !rideSeatsAvail || !rideNotes) {
 		return res.status(400).json('incorrect form submission');
 	}

 	db.transaction(trx => {
 		trx.insert({
 		  username: rideDriver,
 		  //car: rideFrom,
 		  //rate: rideSeatsAvail
 		})
 		.into('drivers')
 		.returning('username')
 		.then(driverName => {
 			//console.log(driverName[0]);
 		  return trx('rides')
 		    .returning('*')
 		    .insert({
 		  	  from: rideFrom,
 		  	  to: rideTo,
	          when: rideDate,
	          time: rideTime,
	          stopovers: rideStopovers,
	          seatAvail: rideSeatsAvail,
	          driverUsername: driverName[0],
	          notes: rideNotes,
	          price: "5"
 		    })
 		    .then(ride => {
 	  	      res.json(ride[0]);
 	  	      console.log(ride[0])
 	        })
 		})
 		.then(trx.commit)
 		.catch(trx.rollback)
 	})
 	//.catch(err => res.status(400).json('Unable to register!'))
 })
