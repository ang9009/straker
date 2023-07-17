// Adapted from https://stackoverflow.com/questions/63873781/how-to-prevent-reactselect-from-clearing-the-input, modified

import React, { useEffect, useLayoutEffect, useState } from "react";
import Select, { createFilter } from "react-select";
import { locationSearchInputStyles } from "../../data/locationSearchInputStyles";
import { getLocationAutocomplete } from "../../queries/getLocationAutocomplete";

function getLastWord(str) {
  return str.split(" ").slice(-1).pop();
}

const AutocompleteSelect = ({ selected, setSelected, placeholder }) => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selected.length === 0 && input == "") return;

    const delayDebounce = setTimeout(() => {
      // Must check if nothing is selected, otherwise fetch is run unnecessarily a second time
      // If input is replaced without being cleared, search should still run
      if (input !== "" && (input !== selected.label || selected.length === 0)) {
        setIsLoading(true);
        getLocationAutocomplete(input).then((res) => {
          const locationsInfo = res.features;
          const locations = [];

          // TODO: add error message if too many requests/location not allowed? + this component is too long
          locationsInfo.forEach((location) => {
            // Reordered because API returns them in wrong order (should be lat first then lng)
            const coords = {
              lat: location.geometry.coordinates[1],
              lng: location.geometry.coordinates[0],
            };
            locations.push({
              value: coords,
              label: location.properties.formatted,
            });
          });

          setOptions(locations);
          setIsLoading(false);
        });
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [input]);

  // Required for marker onDrag event to updaet input
  useEffect(() => {
    if (selected.length !== 0) {
      setInput(selected.label);
    }
  }, [selected]);

  const handleChange = (s) => {
    setSelected({ ...s });
    setInput(s.label);
    setOptions([]);
  };

  const handleInputChange = (e, meta) => {
    if (meta.action === "input-change") {
      setInput(e);
    }
  };

  // Prevents input from being hidden after selecting
  useLayoutEffect(() => {
    const inputEl = document.getElementById(placeholder);
    if (!inputEl) return;
    inputEl.style.opacity = "1";
  }, [selected]);

  const customFilter = () => {
    return (config, rawInput) => {
      const filter = createFilter(null);
      return filter(config, getLastWord(rawInput));
    };
  };

  return (
    <Select
      value={selected}
      filterOption={customFilter()}
      inputId={placeholder}
      placeholder={placeholder}
      onChange={handleChange}
      blurInputOnSelect={false}
      inputValue={input}
      onInputChange={handleInputChange}
      isSearchable
      hideSelectedOptions={true}
      styles={locationSearchInputStyles}
      components={{
        SingleValue: () => null,
      }}
      options={options}
      isLoading={isLoading}
      noOptionsMessage={() => null}
    />
  );
};

export default AutocompleteSelect;
