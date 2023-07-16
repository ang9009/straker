// Adapted from https://stackoverflow.com/questions/63873781/how-to-prevent-reactselect-from-clearing-the-input

export const handleInputChange = (e, meta, setSearch) => {
  if (meta.action === "input-change") {
    setSearch(e.target.value);
  }
};
