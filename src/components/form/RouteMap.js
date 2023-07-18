import {
  FeatureGroup,
  MapContainer,
  Marker,
  TileLayer,
  Polyline,
} from "react-leaflet";
import startMarkerSvg from "../../assets/start_marker.svg";
import endMarkerSvg from "../../assets/end_marker.svg";
import { Icon, latLng, latLngBounds } from "leaflet";
import Skeleton from "react-loading-skeleton";
import { FiMaximize } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { getLocationFromCoords } from "../../queries/getLocationFromCoords";
import { getPolylineCoords } from "../../queries/getPolylineCoords";
import "./RouteMap.css";
import "leaflet/dist/leaflet.css";

const RouteMap = ({
  selectedStartLocation,
  selectedEndLocation,
  setSelectedStartLocation,
  setSelectedEndLocation,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [center, setCenter] = useState(null);
  const [polyline, setPolyline] = useState([]);
  const [error, setError] = useState("");
  const mapRef = useRef(null);
  const groupRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      setCenter([coords.latitude, coords.longitude]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (
      mapRef.current &&
      (selectedStartLocation.length !== 0 || selectedEndLocation.length !== 0)
    ) {
      const map = mapRef.current;
      const group = groupRef.current;
      map.fitBounds(group.getBounds());
    }

    // Setting polyline
    if (
      selectedStartLocation.length !== 0 &&
      selectedEndLocation.length !== 0
    ) {
      setError("");

      getPolylineCoords(selectedStartLocation.value, selectedEndLocation.value)
        .then((res) => {
          if (res.error) {
            throw new Error(res.message);
          }

          const newPolyline = [];

          res.features[0].geometry.coordinates[0].forEach((coords) => {
            newPolyline.push([coords[1], coords[0]]);
          });

          setPolyline(newPolyline);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [selectedStartLocation, selectedEndLocation]);

  const corner1 = latLng(-90, -180);
  const corner2 = latLng(90, 180);
  const worldBounds = latLngBounds(corner1, corner2);

  const handleDragEnd = (marker, setSelected) => {
    const currMarker = marker.current;
    const coords = currMarker.getLatLng();
    getLocationFromCoords(coords).then((res) => {
      setSelected({
        value: coords,
        label: res?.features[0].properties.formatted,
      });
    });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton
          style={{
            width: "100%",
            height: "350px",
          }}
        />
      ) : (
        <div>
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={true}
            ref={mapRef}
            maxBoundsViscosity={1.0}
            maxBounds={worldBounds}
            maxZoom={17}
            minZoom={2}
          >
            <Polyline pathOptions={{ color: "#FC5201" }} positions={polyline} />
            <button id="fullscreen-btn">
              <FiMaximize size={"15px"} />
            </button>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              noWrap={true}
            />
            <FeatureGroup ref={groupRef}>
              {selectedStartLocation.length !== 0 && (
                <Marker
                  position={selectedStartLocation.value || center}
                  draggable={true}
                  ref={startMarkerRef}
                  eventHandlers={{
                    dragend: () =>
                      handleDragEnd(startMarkerRef, setSelectedStartLocation),
                  }}
                  icon={
                    new Icon({
                      iconUrl: startMarkerSvg,
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                      className: "start-marker",
                    })
                  }
                ></Marker>
              )}
              {selectedEndLocation.length !== 0 && (
                <Marker
                  position={selectedEndLocation.value || center}
                  draggable={true}
                  ref={endMarkerRef}
                  eventHandlers={{
                    dragend: () =>
                      handleDragEnd(endMarkerRef, setSelectedEndLocation),
                  }}
                  icon={
                    new Icon({
                      iconUrl: endMarkerSvg,
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                    })
                  }
                ></Marker>
              )}
            </FeatureGroup>
          </MapContainer>
          {error && <p className="error-msg">{error}</p>}
        </div>
      )}
    </>
  );
};

export default RouteMap;
