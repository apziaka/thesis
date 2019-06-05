/*global google*/ 
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
//import './MapContainer.css';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMapReady = this.handleMapReady.bind(this);
  }

  handleMapReady(mapProps, map) {
    this.calculateAndDisplayRoute(map);
  }

  calculateAndDisplayRoute(map) {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
     
    
    const waypoints = this.props.data.map(item =>{
      return{
        location: {lat: item.lat, lng:item.lng},
        stopover: true
      }
    })
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    return (
      <div className="map-container" style={{
          position: "relative",
          height: "calc(100vh - 20px)"
        }}>
        <Map
          google={this.props.google}
          style={{width: '500px', height: '600px', position: 'relative'}}
          className={"map"}
          zoom={this.props.zoom}
          initialCenter={this.props.center}
          onReady={this.handleMapReady}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "...",
  libraries: []
})(MapContainer);
