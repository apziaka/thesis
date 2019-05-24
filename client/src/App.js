import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import About from './components/About/About';
import SearchRide from './components/SearchRide/SearchRide';
import MainButtons from './components/MainButtons/MainButtons';
import Form from './components/OfferRide/Form';
import TheRides from './components/TheRides/TheRides';
import './App.css';

const initialState = {
  route: 'home',
  isSignedIn: false,
  user: {
   email: '',
   firstName: '',
   lastName: '',
   username: '',
   gender: '',
   dateBirth: '',
   details: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      gender: data.gender,
      dateBirth: data.dateBirth,
      details: data.details 
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'firstpage') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  renderRouteSelection() {
    if(this.state.route === 'home' || this.state.route === 'firstpage') {
      return (
        <div>
          <MainButtons onRouteChange={this.onRouteChange} /> 
          <About />
        </div>
      ) ;
    } 

    if( this.state.route === 'rides' ) {
      return(
        <SearchRide onRouteChange={this.onRouteChange} />
      );     
    } else if ( this.state.route === 'offers' )  {
      return(
        <Form onRouteChange={this.onRouteChange} />
      );      
    } else if ( this.state.route === 'signin') {
      return (
          <Signin onRouteChange={this.onRouteChange} />
      );
    } else if ( this.state.route === 'therides') {
      return (
          <TheRides onRouteChange={this.onRouteChange} />
      );
    } else {
      return (
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        <Logo />
        {this.renderRouteSelection()}
      </div>
    );
  }
}

export default App;
