import React from 'react';
import './OfferRide.css';

class OfferRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rideFrom: '',
			rideTo: '',
			rideDate: '',
			rideTime: '',
			rideSeatsAvail: '',
			ridePrice: '',
			rideDriver: '',
			rideNotes: ''
		}
	}

	onFromChange = (event) => {
		this.setState({rideFrom: event.target.value})
	}

	onToChange = (event) => {
		this.setState({rideTo: event.target.value})
	}

	onDateChange = (event) => {
		this.setState({rideDate: event.target.value})
	}

	onTimeChange = (event) => {
		this.setState({rideTime: event.target.value})
	}

	onSeatsAvailChange = (event) => {
		this.setState({rideSeatsAvail: event.target.value})
	}

	onPriceChange = (event) => {
		this.setState({ridePrice: event.target.value})
	}

	onDriverChange = (event) => {
		this.setState({rideDriver: event.target.value})
	}

	onNotesChange = (event) => {
		this.setState({rideNotes: event.target.value})
	}

	onSubmitRide = () => {
		fetch('http://localhost:3000/offerride', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				from: this.state.rideFrom,
				to: this.state.rideTo,
				when: this.state.rideDate,
				time: this.state.rideTime,
				seatAvail: this.state.rideSeatsAvail,
				price: this.state.ridePrice,
				driverUsername: this.state.rideDriver,
				notes: this.state.rideNotes
			})
		})
		   .then(response => response.json())
		   .then(ride => {
		   	  if (ride.from) {
		   	  	this.props.onRouteChange('firstpage');
		   	  }
		   })	
	}

	render(){
		return(
			<h1> Responsive Material Design Form 
  <small>Material Design delivers a cleaner and flatter user interface</small>
</h1>
<div className="contact-wrap">
  <form action="" className="contact-form">
    <div className="col-sm-6">
      <div className="input-block">
        <label htmlFor="">First Name</label>
        <input type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="input-block"/>
        <label for="">Last Name</label>
        <input type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block">
        <label htmlFor="">Message Subject</label>
        <input type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block textarea">
        <label htmlFor="">Drop your message here</label>
        <textarea rows="3" type="text" className="form-control"></textarea>
      </div>
    </div>
    <div className="col-sm-12">
      <button className="square-button">Send</button>
    </div>
  </form>
</div>

		)

	}

//* kokkino background kai aspro
	render(){

		return( 

		<div className="card-form">
  		<form className="signup">
    	<div className="form-title">Sign Up for our Newsletter!</div>
    	<div className="form-body">
      		<div className="row">
        		<input type="text" placeholder="First Name*"/>
        		<input type="text" placeholder="Last Name*"/>
      		</div>
      		<div className="row">
        		<input type="text" placeholder="Email Address*"/>
      		</div>
    	</div>
    	<div className="rule"></div>
    	<div className="form-footer">
      		<a>Sign Me Up!<span class="fa fa-thumbs-o-up"></span></a>
      		<a>Not Now!<span class="fa fa-ban"></span></a>
    	</div>
  	</form>
	</div>
	)
	}

	*/
/* sign in idio me ola

	render(){
		const { onRouteChange } = this.props;
		return(  
	
	 	<div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
      		
      		<article id="overlay" className="br3 ba dark-gray w-100 w-50-m w-100-l mw7 shadow-5 center absolute absolute--fill bg-navy o-70 z-unset"></article>
      		<div className="relative pa4 pa5-m">
        		<h1 className="f1 serif tracked ma0 mb4 pv3 white">Sign In</h1>
        		<div action="" id="login" className="">
          		  <div className="mb3">
            		<label htmlFor="from" className="db f4 white ttu ph2 mb2">From</label>
            		<input type="text" 
            		name="from" 
            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
         		    onChange = {this.onUsernameChange}
         		    />
         		  </div>
          		  <div className="mb4">
           			<label htmlFor="password" className="db f4 white ttu ph2 mb2">Password</label>
            		<input type="password" 
            		name="password" 
            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
          		    onChange = {this.onPasswordChange}
          		    />
          		  </div>
          	      <div>
            		<button onClick={this.onSubmitSignIn} className="input-reset db w-100 light-gray f4 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Sign In</button>
          		  </div>
        		</div>
        
        		<div className="tc b f5 mt4 o-70 glow pa2 i pointer">
         		  <p onClick={() => onRouteChange('register')} className="register" >New Member? Register</p>
        		</div>
     		</div>
   		</div>
  
		);
	}
}
*/




/* pio kainourio sign in ble me tin eikona apo pisw
	render(){
		const { onRouteChange } = this.props;
		return(  
	
	 	<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
  
		);
	}
}
*/
