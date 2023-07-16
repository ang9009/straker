// Adapted from https://stackoverflow.com/questions/63873781/how-to-prevent-reactselect-from-clearing-the-input

import React, { useEffect, useState } from "react";
import Select, { createFilter } from "react-select";
import { locationSearchInputStyles } from "../../data/locationSearchInputStyles";
import { getLocationAutocomplete } from "../../queries/getLocationAutocomplete";

function getLastWord(str) {
  return str.split(" ").slice(-1).pop();
}

function removeLastWord(str) {
  var lastWhiteSpaceIndex = str.lastIndexOf(" ");
  return str.substring(0, lastWhiteSpaceIndex + 1);
}

const AutocompleteSelect = ({ input, setInput, placeholder }) => {
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (input !== "") {
        setIsLoading(true);

        getLocationAutocomplete(input).then((res) => {
          const locationsInfo = res.features;

          const locations = [];

          // TODO: add error message if too many requests?

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
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [input]);

  const handleChange = (s) => {
    setSelected({ ...s });
    setInput((input) => removeLastWord(input) + s.value);
  };

  const handleInputChange = (e, meta) => {
    if (meta.action === "input-change") {
      setInput(e);
    }
  };

  React.useLayoutEffect(() => {
    const inputEl = document.getElementById("myInput");
    if (!inputEl) return;
    // prevent input from being hidden after selecting
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
      inputId="myInput"
      placeholder={placeholder}
      onChange={handleChange}
      blurInputOnSelect={false}
      inputValue={input}
      onInputChange={handleInputChange}
      isSearchable
      hideSelectedOptions={false}
      styles={locationSearchInputStyles}
      components={{
        SingleValue: () => null,
      }}
      options={options}
      isLoading={isLoading}
    />
  );
};

export default AutocompleteSelect;
