import React from 'react';
import ShowRide from './ShowRide';

class Draft_Ride extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			//pushed: false,
			rides: null
		}
	}
/*

 	onDataChange = () => {
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
		   	  	//this.setState({ rides: data.rides })
		   	  	console.log(this.state.rides);
		   	  	//this.setState({pushed: true})
		   	  	//this.state.pushed = true;
		   	  	//this.forceUpdate();
		   	  	this.setState({ key: Math.random() });
		   	  	// this.props.onRouteChange('signin');
		   	  }
		   }).catch(err => {console.error(err)})	
	}

*/
	render() {
		
		const { rides } = this.state;
	 if (rides == null) {
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
					
			</div>
		</div>
		);
	 } else {
	 	if (rides && rides.length > 0){
	 	return(
		
		<div className='tc bg-light-green dib br3 ma2 grow shadow-5'>
			<div>
				{console.log(rides[0].from)}
				
				/*<ShowRide 
					key={this.state.key}
					id={rides[0].id} 
					from={rides[0].from} 
					to={rides[0].to} 
					when={rides[0].when}
					time={rides[0].time}
					seatAvail={rides[0].seatAvail}
					price={rides[0].price}
					driverUsername={rides[0].driverUsername}
					stopovers={rides[0].stopovers}
					notes={rides[0].notes} 
				/>*/
			</div>
		</div>
		);
		}
	 }
	
	
    }
}

export default Draft_Ride;

