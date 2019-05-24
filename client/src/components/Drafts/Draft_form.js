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
*/
import React, { useState } from "react";
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
      />
      <input
        value={To}
        onChange={e => updateFormData(e)}
        placeholder="To"
        type="text"
        name="To"
        required
      />
      <input
        value={Date}
        onChange={e => updateFormData(e)}
        placeholder="Date"
        type="datetime"
        name="date"
        required
      />
      <input
        value={Time}
        onChange={e => updateFormData(e)}
        placeholder="Time"
        type="time"
        name="Time"
        required
      />
      <input
        value={Stopovers}
        onChange={e => updateFormData(e)}
        placeholder="Stopovers"
        type="text"
        name="Stopovers"
        required
      />
      <input
        value={AvailableSeats}
        onChange={e => updateFormData(e)}
        placeholder="Available Seats"
        type="number"
        name="AvailableSeats"
        required
      />
      <input
        value={Details}
        onChange={e => updateFormData(e)}
        placeholder="Details for the ride"
        type="text"
        name="Details"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
