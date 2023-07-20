import "./RouteSection.css";
import RouteMap from "../form/RouteMap";
import { FiNavigation } from "react-icons/fi";
import LocationSearchInput from "../form/LocationSearchInput";

const RouteSection = ({
  selectedStartLocation,
  setSelectedStartLocation,
  selectedEndLocation,
  setSelectedEndLocation,
  setDistance,
  setElevationGain,
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
          setDistance={setDistance}
          setElevationGain={setElevationGain}
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
