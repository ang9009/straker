import { useState, useEffect } from "react";
import "./RouteSection.css";
import RouteMap from "../form/RouteMap";
import { FiNavigation } from "react-icons/fi";
import LocationSearchInput from "../form/LocationSearchInput";

const RouteSection = ({
  selectedStartLocation,
  setSelectedStartLocation,
  selectedEndLocation,
  setSelectedEndLocation,
}) => {
  return (
    <>
      <div className="form-section-container">
        <h1 className="form-section-title">
          <FiNavigation size={"13px"} color={"var(--primaryIconColor)"} />
          <p>Route</p>
        </h1>
        <RouteMap
          selectedStartLocation={selectedStartLocation}
          setSelectedStartLocation={setSelectedStartLocation}
          selectedEndLocation={selectedEndLocation}
          setSelectedEndLocation={setSelectedEndLocation}
        />
        <LocationSearchInput
          selectedStartLocation={selectedStartLocation}
          setSelectedStartLocation={setSelectedStartLocation}
          selectedEndLocation={selectedEndLocation}
          setSelectedEndLocation={setSelectedEndLocation}
        />
      </div>
    </>
  );
};

export default RouteSection;
