import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";

const CenterZoomTracker = ({ setZoomCenter, isLoading }) => {
  const map = useMapEvents({
    move: (e) => {
      setZoomCenter({ zoom: e.target.getZoom(), center: e.target.getCenter() });
    },
  });
  return null;
};

export default CenterZoomTracker;
