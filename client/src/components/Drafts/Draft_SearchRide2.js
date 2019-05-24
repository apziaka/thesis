import React from 'react';

class SearchRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pickUpPlace: '',
			destination: '',
			searchResults: null,
			date: ''
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
		   .then(response => response.json())
		   .then(ride => {
		   	  if (ride) {
		   	  	this.props.onRouteChange('showrides');
		   	  }
		   })

	}

	render(){
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
	}

}

export default SearchRide;