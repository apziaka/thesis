import React, { Component } from 'react';
import { render } from 'react-dom';
import MapContainer from './MapContainer';
//import './style.css';


const data = [
  {
    lat: 37.9838,
    lng: 23.7275
  },
  {
    lat: 39.6390,
    lng: 22.4191
  },
  {
    lat: 40.6401,
    lng: 22.9444
  }
];

class Mapp extends React.Component {

  render(){
    return(
          <MapContainer center={{ lat: 39.0742, lng: 21.8243 }} zoom={2} data={data} />

    );
  }

}

export default Mapp;