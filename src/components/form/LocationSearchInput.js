import AsyncSelect from "react-select/async";
import { locationSearchInputStyles } from "../../data/locationSearchInputStyles";
import { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import "./LocationSearchInput.css";
import AutocompleteSearchInput from "./AutocompleteSearchInput";

const LocationSearchInput = () => {
  const [startSearch, setStartSearch] = useState("");
  const [endSearch, setEndSearch] = useState("");

  return (
    <>
      <div className="search-input-container">
        <FiMapPin style={{ marginRight: "15px", color: "blue" }} />
        <AutocompleteSearchInput
          input={startSearch}
          setInput={setStartSearch}
          placeholder={"Set starting point..."}
        />
      </div>
      <div className="search-input-container">
        <FiMapPin style={{ marginRight: "15px", color: "red" }} />
        <AutocompleteSearchInput
          input={endSearch}
          setInput={setEndSearch}
          placeholder={"Set ending point..."}
        />
      </div>
    </>
  );
};

export default LocationSearchInput;
