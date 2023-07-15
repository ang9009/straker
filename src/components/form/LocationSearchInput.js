import AsyncSelect from "react-select/async";
import { locationSearchInputStyles } from "../../data/locationSearchInputStyles";
import { useState } from "react";
import { FiCircle, FiMapPin } from "react-icons/fi";
import "./LocationSearchInput.css";

const LocationSearchInput = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <>
      <div className="search-input-container">
        <FiMapPin style={{ marginRight: "15px", color: "blue" }} />
        <AsyncSelect
          styles={locationSearchInputStyles}
          placeholder={"Enter starting point..."}
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className="search-input-container">
        <FiMapPin style={{ marginRight: "15px", color: "red" }} />
        <AsyncSelect
          styles={locationSearchInputStyles}
          placeholder={<div>Enter ending point...</div>}
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
    </>
  );
};

export default LocationSearchInput;
