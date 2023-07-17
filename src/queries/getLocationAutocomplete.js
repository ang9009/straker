export const getLocationAutocomplete = async (search) => {
  const result = await fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=d6d14a1a9eb145229d47202ad8323ef0`
  ).then((res) => res.json());

  return result;
};
