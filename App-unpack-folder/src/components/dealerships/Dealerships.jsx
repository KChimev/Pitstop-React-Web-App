import React from 'react'
import './Dealerships.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import marker from '../assets/marker.png'
function Dealerships() {
  const markerIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
  })
  return (
    <div className="dealerships__container">
      <div className="dealerships__info">
        <MapContainer
          className="dealerships__map"
          center={[42.681309, 23.321288]}
          zoom={12}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[42.64005, 23.314652]} icon={markerIcon}>
            <Popup>
              Our Vitosha Dealership
              <br /> Open every Weekday from 10:00 to 17:00.
            </Popup>
          </Marker>
          <Marker position={[42.694849, 23.309031]} icon={markerIcon}>
            <Popup>
              Our Central Dealership <br /> Open Every Weekday from 9:00 to
              18:00.
            </Popup>
          </Marker>
        </MapContainer>
        <p>
          You can find us any workday at our dealerships in Sofia. <br></br>
          We are also constantly supplying online support to our clients.
          <br></br>
          Write to us at one of our social media outlets an we will be sure to
          return an answer to your questions.
        </p>
      </div>
    </div>
  )
}

export default Dealerships
