// Reverse geocoding

export const getLocationFromCoords = async ({ lat, lng }) => {
  const result = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=d6d14a1a9eb145229d47202ad8323ef0`
  )
    .then((res) => {
      if (!res.error) {
        return res.json();
      }

      throw new Error(res.error.message);
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
};
