import { FeatureGroup, MapContainer, Marker, TileLayer } from "react-leaflet";
import ChangeView from "../form/ChangeView";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon, Map } from "leaflet";
import Skeleton from "react-loading-skeleton";
import { FiMaximize } from "react-icons/fi";

import "./RouteMap.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { getLocationFromCoords } from "../../queries/getLocationFromCoords";

const RouteMap = ({
  selectedStartLocation,
  selectedEndLocation,
  setSelectedStartLocation,
  setSelectedEndLocation,
}) => {
  const [center, setCenter] = useState(null);
  const mapRef = useRef(null);
  const groupRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);

  const getCurrLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      setCenter([coords.latitude, coords.longitude]);
    });
  };

  useEffect(() => {
    getCurrLocation();
  }, []);

  // Resizes map when coordinates of start/end points change
  // Allows markers to always be visible
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const group = groupRef.current;
      map.fitBounds(group.getBounds());
    }
  }, [selectedStartLocation, selectedEndLocation]);

  return (
    <>
      {center ? (
        <MapContainer
          center={selectedStartLocation.value || center}
          zoom={13}
          scrollWheelZoom={true}
          ref={mapRef}
        >
          {/* ChangeView required to change center dynamically because MapContainer has immutable props*/}
          <ChangeView center={selectedStartLocation.value || center} />
          <button id="fullscreen-btn">
            <FiMaximize size={"15px"} />
          </button>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FeatureGroup ref={groupRef}>
            <Marker
              position={selectedStartLocation.value || center}
              draggable={true}
              ref={startMarkerRef}
              eventHandlers={{
                dragend: () => {
                  const marker = startMarkerRef.current;
                  const coords = marker.getLatLng();
                  getLocationFromCoords(coords).then((res) => {
                    setSelectedStartLocation({
                      value: coords,
                      label: res.features[0].properties.formatted,
                    });
                  });
                },
              }}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            ></Marker>
            <Marker
              position={selectedEndLocation.value || center}
              draggable={true}
              ref={endMarkerRef}
              eventHandlers={{
                dragend: () => {
                  const marker = endMarkerRef.current;
                  const coords = marker.getLatLng();
                  getLocationFromCoords(coords).then((res) => {
                    setSelectedEndLocation({
                      value: coords,
                      label: res.features[0].properties.formatted,
                    });
                  });
                },
              }}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            ></Marker>
          </FeatureGroup>
        </MapContainer>
      ) : (
        <Skeleton
          style={{
            width: "100%",
            height: "350px",
          }}
        />
      )}
    </>
  );
};

export default RouteMap;
