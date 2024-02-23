import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './App.css';

class App extends Component {
  render() {
    // Styles pour la carte Google Maps
    const mapStyles = {
      width: '20%', // Largeur de la carte
      height: '20%', // Hauteur de la carte
      
    };

    return (
      <div className="App">
        <h1>Page d'atterrissage avec Google Maps</h1>
        {/* Bloc de la carte Google Maps */}
        <div style={mapStyles}>
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{ lat: 48.8566, lng: 2.3522 }} // Coordonnées de Paris par défaut
          >
            {/* Marqueur sur la carte */}
            <Marker position={{ lat: 48.8566, lng: 2.3522 }} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCZKHr1eO5faOzMp-aitfvP-Cvpyv5RLs' 
})(App);

// BAMBA je pense que les api maps google sont payantes // 
