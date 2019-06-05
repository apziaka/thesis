import React from 'react';
import Draft_Ride from './Draft_Ride';
import ShowRide from './ShowRide';

class SearchRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pickUpPlace: '',
			destination: '',
			date: '',
			rides: null,
			pushed: false
		}
	}

	onPickUpPlaceChange = (event) => {
		this.setState({pickUpPlace: event.target.value})
	}

	onDestinationChange = (event) => {
		this.setState({destination: event.target.value})
	}

	onDateChange = (event) => {
		this.setState({date: event.target.value})
	}

	onSubmitSearch = () => {
		fetch(`http://localhost:3000/searchride?from=${this.state.pickUpPlace}&to=${this.state.destination}&date=${this.state.date}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
			params: {}
		})
		   .then(response => {if(response.status > 200) {
		   	throw new Error();}console.log(response);return response.json();})
		   .then(data => {
		   	  if (data) {
		   	  	//console.log(data);
		   	  	this.state.rides = data;
		   	  	console.log(data);
		   	  	this.forceUpdate();
		   	  	// this.props.onRouteChange('signin');
		   	  }
		   }).catch(err => {console.error(err)})	
	}

	onDataChange = () => {
		fetch(`http://localhost:3000/showride?id=${this.state.rides[0].id}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
			params: {}
		})
		   .then(response => {if(response.status > 200) {
		   	throw new Error();}console.log(response);return response.json();})
		   .then(data => {
		   		console.log(this.props.id);
		   	  if (data) {
		   	  	//this.setState({pushed: true})
		   	  	//console.log(this.state.pushed);
		   	  	//console.log(data);
		   	  	this.state.ride = data;
		   	  	//this.setState({ rides: data.rides })
		   	  	
		   	  	console.log(this.state.ride);
		   	  	this.setState({pushed: true})
		   	  	//this.state.pushed = true;
		   	  	this.forceUpdate();
		   	  	//this.setState({ key: Math.random() });
		   	  	// this.props.onRouteChange('signin');
		   	  }
		   }).catch(err => {console.error(err)})	
	} 

	render(){
		const { onRouteChange } = this.props;
		const { rides} = this.state;
		const { pushed} = this.state;
		const { ride} = this.state;

		 
    if(rides === null && pushed === false){
		return (  
	
	 	<div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
      		
      		<article id="overlay" className="br3 ba dark-gray w-100 w-50-m w-100-l mw7 shadow-5 center absolute absolute--fill bg-navy o-70 z-unset"></article>
      		<div className="relative pa4 pa5-m">
        		<h1 className="f1 serif tracked ma0 mb4 pv3 white">Search for a ride</h1>
        		<div action="" id="login" className="">
          		  <div className="mb3">
            		<label htmlFor="from" className="db f4 white ttu ph2 mb2">From</label>
            		<input type="text" 
            		name="from" 
            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
         		    onChange = {this.onPickUpPlaceChange}
         		    />
         		  </div>
          		  <div className="mb4">
           			<label htmlFor="to" className="db f4 white ttu ph2 mb2">To</label>
            		<input type="text" 
            		name="to" 
            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
          		    onChange = {this.onDestinationChange}
          		    />
          		  </div>
          		  <div className="mb5">
           			<label htmlFor="date" className="db f4 white ttu ph2 mb2">Date</label>
            		<input type="date" 
            		name="date" 
            		className="input-reset db w-90 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
          		   onChange = {this.onDateChange}
          		    />
          		  </div>
          	      <div>
            		<button onClick={this.onSubmitSearch} className="input-reset db w-100 light-gray f4 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Search</button>
          		  </div>
        		</div>
     		</div>
   		</div>
  
		);

	} else if (pushed === true) {
		return(
		
		<div className='tc bg-light-green dib br3 ma2 grow shadow-5'>
			<div>
				{console.log(ride[0].from)}
				
				<ShowRide 
					
					id={ride[0].id} 
					from={ride[0].from} 
					to={ride[0].to} 
					when={ride[0].when}
					time={ride[0].time}
					seatAvail={ride[0].seatAvail}
					price={ride[0].price}
					driverUsername={ride[0].driverUsername}
					stopovers={ride[0].stopovers}
					notes={ride[0].notes} 
				/>
			</div>
		</div>
		);
	


	}else{
		if (rides && rides.length > 0 && pushed === false){
		return (
			<div> {
			rides.map((user, i) => {
			  
			  	return (
			  		<div onClick={this.onDataChange}>
					<Draft_Ride 
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
						//onRouteChange={this.onRouteChange}
					/>
					
					</div>
				);	
			})
		}
		</div>
		);
		} else {
			return(
				<h1 className="f1  tracked ma0 mb4 pv3 white">No results are found</h1>
			);
		}
	}
	}

}

export default SearchRide;