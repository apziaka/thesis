/*
import React from 'react';
import useForm from 'react-hook-form';
import './Form.css';


export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="From" ref={register({ required: true, maxLength: 80 })} />
      <input type="text" name="To" ref={register({ required: true, maxLength: 80 })} />
      <input type="text" name="Stopovers" ref={register} />
      <input type="datetime" name="Date" ref={register({ required: true })} />
      <input type="time" name="Time" ref={register({ required: true })} />
      <input type="text" name="Details for the ride" ref={register({ required: true })} />
      <input type="number" name="Available seats" ref={register({ required: true, max: 3 })} />

      <input type="submit" />
    </form>
  );
}
********************************************************************
import React, { useState } from "react";
//import useForm from 'react-hook-form';
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    From: "",
    To: "",
    Date: "",
    Time: "",
    Stopovers: "",
    AvailableSeats: "",
    Details: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { From, To, Date, Time, Stopovers, AvailableSeats, Details } = formData;

  return (
    <form>
      <input
        value={From}
        onChange={e => updateFormData(e)}
        placeholder="From"
        type="text"
        name="From"
        required
        className="input-reset db mb4  mw-100 .vh-75-l white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
      />
      <input
        value={To}
        onChange={e => updateFormData(e)}
        placeholder="To"
        type="text"
        name="To"
        required
        className="input-reset db mb4  mw-100 .vh-75-l white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
      />
      
      <input
        value={Time}
        onChange={e => updateFormData(e)}
        placeholder="Time"
        type="time"
        name="Time"
        required
        className="input-reset db mb4  mw-100 .vh-75-l white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
      />
      <input
        value={Stopovers}
        onChange={e => updateFormData(e)}
        placeholder="Stopovers"
        type="text"
        name="Stopovers"
        required
        className="input-reset db mb4  mw-100 .vh-75-l white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
      />
      <input
        value={AvailableSeats}
        onChange={e => updateFormData(e)}
        placeholder="Available Seats"
        type="number"
        name="AvailableSeats"
        required
        className="input-reset db mb4  mw-100 .vh-75-l white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
      />
      <input
        value={Details}
        onChange={e => updateFormData(e)}
        placeholder="Details for the ride"
        type="text"
        name="Details"
        required
        className="input-reset db mb4  mw-100 .vh-75-l white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

*/

import React from 'react';
//import useForm from 'react-hook-form';
import './Form.css';
//import DateTimePicker from 'react-datetime-picker';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rideFrom: '',
			rideTo: '',
			rideStopovers: '',
			rideDate: '',
			rideTime: '',
			rideSeatsAvail: '',
			rideStopovers: '',
			//ridePrice: '',
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

	onStopoversChange = (event) => {
		this.setState({rideStopovers: event.target.value})
	}

	//onPriceChange = (event) => {
	//	this.setState({ridePrice: event.target.value})
	//}

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
				rideFrom: this.state.rideFrom,
				rideTo: this.state.rideTo,
				rideDate: this.state.rideDate,
				rideTime: this.state.rideTime,
				rideSeatsAvail: this.state.rideSeatsAvail,
				rideStopovers: this.state.rideStopovers,
				//price: this.state.ridePrice,
				rideDriver: this.state.rideDriver,
				rideNotes: this.state.rideNotes
			})
		})
		   .then(response => response.json())
		   .then(ride => {
		   	  if (ride) {
		   	  	this.props.onRouteChange('rides');
		   	  }
		   })

	}

	render(){
		return (
    <form>
      <input
        //value={this.rideFrom}
        //onChange={e => updateFormData(e)}
        placeholder="From"
        type="text"
        name="rideFrom"
        required
        className="input-reset db mb4 w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
      	onChange = {this.onFromChange}
      />
      <input
        //value={this.rideTo}
        //onChange={e => updateFormData(e)}
        placeholder="To"
        type="text"
        name="rideTo"
        required
        className="input-reset db mb4 w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
        onChange = {this.onToChange}
      />
      <input
        //value={this.rideTo}
        //onChange={e => updateFormData(e)}
        placeholder="Date"
        type="date"
        name="rideDate"
        required
        className="input-reset db mb4 w-l mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
        onChange = {this.onDateChange}
      />
      <input
        value={this.rideTime}
        //onChange={e => updateFormData(e)}
        placeholder="Time"
        type="time"
        name="rideTime"
        required
        className="input-reset db mb4 w-l mw-100  white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
        onChange = {this.onTimeChange}
      />
      <input
        value={this.rideStopovers}
        //onChange={e => updateFormData(e)}
        placeholder="Stopovers"
        type="text"
        name="rideStopovers"
        required
        className="input-reset db mb4 w-100 mw-100  white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
        onChange = {this.onStopoversChange}
      />
      <input
        value={this.rideSeatsAvail}
        //onChange={e => updateFormData(e)}
        placeholder="Available Seats"
        type="number"
        name="rideSeatsAvail"
        required
        className="input-reset db mb4 w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
        onChange = {this.onSeatsAvailChange}
      />
      <input
        value={this.rideDriver}
        //onChange={e => updateFormData(e)}
        placeholder="Name of Driver"
        type="text"
        name="rideDriver"
        required
        className="input-reset db mb4 w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
        onChange = {this.onDriverChange}
      />
      <input
        value={this.rideNotes}
        //onChange={e => updateFormData(e)}
        placeholder="Details for the ride"
        type="text"
        name="rideNotes"
        required
        className="input-reset db mb4 w-100 mw-100  white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill"
      	onChange = {this.onNotesChange}
      />

      <button type="submit" 
      onClick={this.onSubmitRide}
      className="input-reset db w-100 light-gray f4 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Submit the ride</button>
    </form>
  );
	}

}

export default Form;