export const getPolylineCoords = async (start, end) => {
  const response = await fetch(
    `  https://api.geoapify.com/v1/routing?waypoints=${start.lat},${start.lng}|${end.lat},${end.lng}&mode=walk&details=elevation&apiKey=d6d14a1a9eb145229d47202ad8323ef0`
  ).then((res) => res.json());

  return response;
};
