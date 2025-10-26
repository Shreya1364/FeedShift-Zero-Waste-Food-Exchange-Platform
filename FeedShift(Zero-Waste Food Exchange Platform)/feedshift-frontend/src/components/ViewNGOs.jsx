// NearbyNGOs.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './ViewNGOs.css';
import Navbar from './Navbar';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 19.0760, // Mumbai center (change as needed)
  lng: 72.8777,
};

const ngoLocations = [
  { name: "Helping Hands", lat: 18.5204, lng: 73.8567 },
  { name: "Food for All", lat: 18.5310, lng: 73.8446 },
  {
    name: 'Green Hope Organization',
    lat: 19.0825,
    lng: 72.8850,
  },
];

function NearbyNGOs() {
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <Navbar />
    <div className="ngo-map-container">
      <h2 className="ngo-map-title">View Nearby NGOs</h2>
      <LoadScript googleMapsApiKey="YOUR GOOGLE MAP API KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {ngoLocations.map((ngo, index) => (
            <Marker
              key={index}
              position={{ lat: ngo.lat, lng: ngo.lng }}
              onClick={() => setSelected(ngo)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h4>{selected.name}</h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
    </>
  );
}

export default NearbyNGOs;

