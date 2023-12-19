import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

// LocationPin component representing a pin on the map
const LocationPin = ({ text }) => (
    <div className="pin">
        <p className="pin-text">{text}</p>
    </div>
)

// MapSection component displaying a Google Map with a marker at a specified location
const MapSection = ({ location, zoomLevel }) => (
    <div className="map">
        {/* Heading for the map section */}
        <h2 className="map-h2">Come Visit Us At Our Bootcamp</h2>

        <div className="google-map">
            {/* GoogleMapReact component to render the Google Map */}
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                {/* Displaying the LocationPin marker at the specified location */}
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
);

export default MapSection;
