 const express = require('express');
 const bodyParser = require('body-parser');
 const bcrypt = require('bcrypt-nodejs');
 const cors = require('cors');
 const knex = require('knex');

 const db = knex({
   client: 'pg',
   connection: {
     host : '127.0.0.1',
     user : 'postgres',
     password : '%ap7921',
     database : 'thesis'
   }
 });

 db.select('*').from('rides').then(data => {
 	//console.log(data);
 })

 const app = express();

 app.use(bodyParser.json());
 app.use(cors());

 app.get('/', (req, res)=> {
 	res.send(database.users);
 })

 app.get('/apostolia', (req,res,next) => {console.log('apostolia'); next();},(req,res)=> {

 })

 app.post('/signin', (req, res) => {
 	const { username, password } = req.body;
 	console.log(username);
 	console.log(password);
 	if (!username || !password) {
 		return res.status(400).json('incorrect form submission');
 	}
 	db.select('username', 'hash').from('login')
 	  .where('username', '=', username)
	  .then(data => {
 	    const isValid = bcrypt.compareSync(password, data[0].hash);
 	    console.log(isValid);
 	    if (isValid) {
 	       return db.select('*').from('users')
 	       .where('username', '=', username)
 	       .then(user => {
 	       	console.log(user);
 	       	 res.json(user[0])
 	       })
 	       .catch(err => res.status(400).json('unale to get user'))
 		} else {
 			res.status(400).json('wrong credentials')
 		}
 	})
	.catch(err => res.status(400).json('wrong credentials'))
 })

 app.post('/register', (req, res) => {
 	const { email, firstName, lastName, username, password, gender, dateBirth, details } = req.body;
 	if (!email || !username || !password) {
 		return res.status(400).json('incorrect form submission');
 	}
 	const hash = bcrypt.hashSync(password);
 	db.transaction(trx => {
 		trx.insert({
 		  username: username,
 		  hash: hash,
 		  email: email
 		})
 		.into('login')
 		.returning('username')
 		.then(loginUsername => {
 		  return trx('users')
 		    .returning('*')
 		    .insert({
 		  	  username: loginUsername[0],
 		  	  email: email,
	          firstname: firstName,
	          lastname: lastName,
	          gender: gender,
	          datebirth: dateBirth,
	          details: details
 		    })
 		    .then(user => {
 	  	      res.json(user[0]);
 	        })
 		})
 		.then(trx.commit)
 		.catch(trx.rollback)
 	})
 	//.catch(err => res.status(400).json('Unable to register!'))
 })

 app.get('/searchride',(req, res) => {
 	const from = req.query['from'];
 	const to = req.query['to'];
 	const date = req.query['date'];
 	// console.log(from);
 	// console.log(to);
 	// console.log(date);
 	if (!from || !to || !date) {
 		return res.status(400).json('incorrect form submission');
 	}
 	return db.select('*').from('rides')
 	  .where('from', '=', from)
 	  .where('to', '=', to)
 	  .returning('*')
	  .then(ride => {
	  	console.log(ride);
 	    res.json(ride);
 	  })
	  .catch(err => res.status(400).json('something is wrong'))
 }) 

 app.post('/offerride', (req, res) => {
 	const { rideFrom, rideTo, rideStopovers, rideDate, rideTime, rideSeatsAvail, rideDriver, rideNotes} = req.body;
 	console.log(rideFrom);
 	console.log(rideTo);
 	console.log(rideStopovers);
 	console.log(rideDate);
 	console.log(rideTime);
 	console.log(rideSeatsAvail);
 	console.log(rideDriver);
 	console.log(rideNotes);
 	if (!rideFrom || !rideTo || !rideStopovers || !rideDate || !rideTime || !rideSeatsAvail || !rideNotes) {
 		return res.status(400).json('incorrect form submission');
 	}
 	return db.select('*').from('drivers')
 	  		 .where('username','=', rideDriver)
 	         .then(data => {
 	         	//console.log(rideDriver);
 	  	//console.log(data);
 	  
 	  if (!data.length) {
	  	
 	  		db.transaction(trx => {
		 		trx.insert({
		 		  username: rideDriver,
		 		  //car: rideFrom,
		 		  //rate: rideSeatsAvail
		 		})
		 		.into('drivers')
		 		.returning('username')
		 		.then(driverName => {
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
		 	  	      //console.log(ride[0])
		 	        })
		 		})
		 		.then(trx.commit)
		 		.catch(trx.rollback)
		 	})
		 	.catch(err => res.status(400).json('Unable to register!'))
 	  	} else {
 	  		return db.insert({
 	  			from: rideFrom,
		 		to: rideTo,
			    when: rideDate,
			    time: rideTime,
			    stopovers: rideStopovers,
			    seatAvail: rideSeatsAvail,
			    driverUsername: rideDriver,
			    notes: rideNotes,
			    price: "5"
 	  		})
 	  		.into('rides')
 	  		.returning('*')
 	  		.then(ride => {
 	  			res.json(ride[0]);
		 	  	console.log('Ypirxe stous drivers kai eftasa sto else');
		 	  	console.log(ride[0]);
 	  		})
 	  		.catch(err => res.status(400).json('unale to submit ride'))

 	  	}
 	  })	
 })

 app.get('/showride',(req, res) => {
 	const id = req.query['id'];
 	// console.log(from);
 	// console.log(to);
 	// console.log(date);
 	if (!id) {
 		return res.status(400).json('incorrect form submission');
 	}
 	return db.select('*').from('rides')
 	  .where('id', '=', id)
 	  .returning('*')
	  .then(ride => {
	  	console.log(ride);
 	    res.json(ride);
 	  })
	  .catch(err => res.status(400).json('something is wrong'))
 }) 


 /*app.get('/profile/:username', (req, res) => {
 	const { username } = req.params;
 	db.select('*').from('users').where({username})
 	  .then(user => {
	  	if (user.length) {
	  	  res.json(user[0])
	  	} else {
	  	  res.status(400).json('Not found!')
	  	}
 	  })
 	  .catch(err => res.status(400).json('error getting user'))
 })*/

 app.listen(3000, ()=> {
 	console.log('app is running on port 3000')
 })