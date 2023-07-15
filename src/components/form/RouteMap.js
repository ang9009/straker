import { MapContainer, Marker, TileLayer } from "react-leaflet";
import ChangeView from "../form/ChangeView";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import Skeleton from "react-loading-skeleton";
import { FiMaximize } from "react-icons/fi";

import "./RouteMap.css";
import "leaflet/dist/leaflet.css";

const RouteMap = ({ center }) => {
  return (
    <>
      {center ? (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
          <ChangeView center={center} />
          <button id="fullscreen-btn">
            <FiMaximize size={"15px"} />
          </button>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={center}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          ></Marker>
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
