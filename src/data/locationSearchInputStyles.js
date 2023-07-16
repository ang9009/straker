export const locationSearchInputStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    padding: "var(--inputPadding)",
    cursor: "text",
    height: "50px",
    outline: "none",
    border: state.isFocused
      ? "var(--inputFocusedBorder)"
      : "var(--borderThickness) solid var(--inputBorderColor)",
    boxShadow: "var(--inputBoxShadow)",
    "&:hover": {
      border: state.isFocused
        ? "var(--inputFocusedBorder)"
        : "var(--borderThickness) solid var(--inputBorderColor)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
    margin: "0",
    fontSize: "var(--inputFontSize)",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
    margin: "0",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    marginLeft: "0",
    fontSize: "var(--inputFontSize)",
    display: "flex",
    alignItems: "center",
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    maxWidth: "452.22px",
    outline: "none",
    border: "none",
  }),
};
