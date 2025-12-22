import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CoverageMap() {
  const position = [23.8103, 90.4125]; // Dhaka

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        Service Coverage Area
      </h2>


      <MapContainer
        center={position}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
        className="rounded-lg"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        <Marker position={position}>
          <Popup>StyleDecor Service Available Here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
