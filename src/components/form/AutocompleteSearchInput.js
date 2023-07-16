// Adapted from https://stackoverflow.com/questions/63873781/how-to-prevent-reactselect-from-clearing-the-input, modified

import React, { useEffect, useLayoutEffect, useState } from "react";
import Select, { createFilter } from "react-select";
import { locationSearchInputStyles } from "../../data/locationSearchInputStyles";
import { getLocationAutocomplete } from "../../queries/getLocationAutocomplete";

function getLastWord(str) {
  return str.split(" ").slice(-1).pop();
}

const AutocompleteSelect = ({ input, setInput, placeholder }) => {
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      // Must check if nothing is selected, otherwise fetch is run unnecessarily a second time
      if (input !== "" && selected.length === 0) {
        console.log("fetching");
        setIsLoading(true);

        getLocationAutocomplete(input).then((res) => {
          const locationsInfo = res.features;

          const locations = [];

          // TODO: add error message if too many requests? + this component is too long
          locationsInfo.forEach((location) => {
            locations.push({
              value: location.properties.formatted,
              label: location.properties.formatted,
            });
          });

          setOptions(locations);
          setIsLoading(false);
        });
      }
    }, 1000);

    // Clear options and selected if input is cleared
    if (input === "") {
      setOptions([]);
      setSelected([]);
    }
    return () => clearTimeout(delayDebounce);
  }, [input]);

  const handleChange = (s) => {
    setSelected({ ...s });
    setInput(s.value);
  };

  const handleInputChange = (e, meta) => {
    if (meta.action === "input-change") {
      setInput(e);
    }
  };

  useLayoutEffect(() => {
    const inputEl = document.getElementById(placeholder);
    if (!inputEl) return; // Prevents input from being hidden after selecting
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
      noOptionsMessage={() => "No locations found!"}
    />
  );
};

export default AutocompleteSelect;
