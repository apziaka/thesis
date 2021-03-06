import React from 'react';
import ShowRide from './ShowRide';

class Ride extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//id: null,
			pushed: false,
			rides: null
		}
	}

	setID = (id) => {
      this.setState({id: this.props.id})
      this.setState({pushed: false})
      //this.forceUpdate();
     
 	}

 	onSubmitSearch = () => {
		fetch(`http://localhost:3000/showride?id=${this.props.id}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
			params: {}
		})
		   .then(response => {if(response.status > 200) {
		   	throw new Error();}console.log(response);return response.json();})
		   .then(data => {
		   	  if (data) {
		   	  	//this.setState({pushed: true})
		   	  	//console.log(this.state.pushed);
		   	  	//console.log(data);
		   	  	this.state.rides = data;
		   	  	console.log(this.state.rides);
		   	  	//this.setState({pushed: true})
		   	  	this.state.pushed = true;
		   	  	this.forceUpdate();
		   	  	// this.props.onRouteChange('signin');
		   	  }
		   }).catch(err => {console.error(err)})	
	}

	render() {
		const { rides } = this.state;

	  if (this.state.pushed == false) {
		return(
		
		<div className='tc bg-light-green dib br3 ma2 grow shadow-5'>
			<img alt='photo' src={`https://robohash.org/${this.props.driverUsername}?200x200`} />
			<div>
				<h1>{this.props.driverUsername}</h1>
				<h2>{this.props.id}</h2>
				<h2>{this.props.from}</h2>
				<h2>{this.props.to}</h2>
				<p>{this.props.when}</p>
				<h1>{this.props.price} $ </h1>
				<button onClick={this.onSubmitSearch} className='pa1 tc grow f3 bw0 link ph3 pv5 mb13 dib white bg-dark-blue shadow-5'>Show more</button>
					
			</div>
		</div>
		);
	  } else {
	  	return(
	  		
    				<ShowRide 
	  					id={rides.id} 
						from={rides.from} 
						to={rides.to} 
						when={rides.when}
						time={rides.time}
						seatAvail={rides.seatAvail}
						price={rides.price}
						driverUsername={rides.driverUsername}
						stopovers={rides.stopovers}
						notes={rides.notes} 
	  				/>
	  		
	  			
	  		
	  		
	  	);
	    
	  
	  }
		
	
	
    }
}

export default Ride;

