import AsyncSelect from "react-select/async";
import { locationSearchInputStyles } from "../../data/locationSearchInputStyles";
import { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import "./LocationSearchInput.css";
import AutocompleteSearchInput from "./AutocompleteSearchInput";

const LocationSearchInput = ({
  selectedStartLocation,
  setSelectedStartLocation,
  selectedEndLocation,
  setSelectedEndLocation,
}) => {
  return (
    <>
      <div className="search-input-container">
        <FiMapPin style={{ marginRight: "15px", color: "#5490f5" }} />
        <AutocompleteSearchInput
          selected={selectedStartLocation}
          setSelected={setSelectedStartLocation}
          placeholder={"Set starting point..."}
        />
      </div>
      <div className="search-input-container">
        <FiMapPin style={{ marginRight: "15px", color: "#eb4f24" }} />
        <AutocompleteSearchInput
          selected={selectedEndLocation}
          setSelected={setSelectedEndLocation}
          placeholder={"Set ending point..."}
        />
      </div>
    </>
  );
};

export default LocationSearchInput;
