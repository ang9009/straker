export const getLocationAutocomplete = async (search) => {
  const requestOptions = {
    method: "GET",
  };

  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=d6d14a1a9eb145229d47202ad8323ef0`,
    { requestOptions }
  ).then((response) => response.json());

  return response;
};
