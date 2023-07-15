import { useState, useEffect } from "react";
import "./RouteSection.css";
import RouteMap from "../form/RouteMap";
import { FiNavigation } from "react-icons/fi";
import LocationSearchInput from "../form/LocationSearchInput";

const RouteSection = () => {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      setCenter([coords.latitude, coords.longitude]);
    });
  }, []);

  return (
    <>
      <div className="form-section-container">
        <h1 className="form-section-title">
          <FiNavigation size={"13px"} color={"var(--primaryIconColor)"} />
          <p>Route</p>
        </h1>
        <RouteMap center={center} />
        <LocationSearchInput />
      </div>
    </>
  );
};

export default RouteSection;
