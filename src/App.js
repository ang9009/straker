import PhonePreview from "./components/ui/PhonePreview";
import EditingPane from "./components/form/EditingPane";
import Modal from "react-modal";
import "./App.css";

// Library styles
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  Modal.setAppElement("#root");
  // Profile section
  const [profileData, setProfileData] = useState({
    title: "Untitled run",
    profileImg: require("./assets/profile.png"),
    name: "",
  });

  const profileHandleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Route section
  const [selectedStartLocation, setSelectedStartLocation] = useState([]);
  const [selectedEndLocation, setSelectedEndLocation] = useState([]);
  const [map, setMap] = useState(null);
  const [polyline, setPolyline] = useState([]);

  // Run info section
  const [dateTimeValue, dateTimeOnChange] = useState(new Date());
  const [location, setLocation] = useState("");

  // Run data section
  const [distance, setDistance] = useState("");
  const [elevationGain, setElevationGain] = useState("");
  const [timeValue, timeOnChange] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [pace, setPace] = useState("");

  const [zoomCenter, setZoomCenter] = useState(null);

  return (
    <div id="root">
      <PhonePreview
        profileData={profileData}
        profileHandleChange={profileHandleChange}
        selectedStartLocation={selectedStartLocation}
        selectedEndLocation={selectedEndLocation}
        dateTimeValue={dateTimeValue}
        location={location}
        distance={distance}
        setSelectedStartLocation={setSelectedStartLocation}
        setSelectedEndLocation={setSelectedEndLocation}
        dateTimeOnChange={dateTimeOnChange}
        setLocation={setLocation}
        setDistance={setDistance}
        elevationGain={elevationGain}
        setElevationGain={setElevationGain}
        timeValue={timeValue}
        timeOnChange={timeOnChange}
        caloriesBurned={caloriesBurned}
        setCaloriesBurned={setCaloriesBurned}
        heartRate={heartRate}
        setHeartRate={setHeartRate}
        pace={pace}
        setPace={setPace}
        polyline={polyline}
        setPolyline={setPolyline}
        zoomCenter={zoomCenter}
        setZoomCenter={setZoomCenter}
      />
      <EditingPane
        profileData={profileData}
        profileHandleChange={profileHandleChange}
        selectedStartLocation={selectedStartLocation}
        selectedEndLocation={selectedEndLocation}
        dateTimeValue={dateTimeValue}
        location={location}
        distance={distance}
        setSelectedStartLocation={setSelectedStartLocation}
        setSelectedEndLocation={setSelectedEndLocation}
        dateTimeOnChange={dateTimeOnChange}
        setLocation={setLocation}
        setDistance={setDistance}
        elevationGain={elevationGain}
        setElevationGain={setElevationGain}
        timeValue={timeValue}
        timeOnChange={timeOnChange}
        caloriesBurned={caloriesBurned}
        setCaloriesBurned={setCaloriesBurned}
        heartRate={heartRate}
        setHeartRate={setHeartRate}
        pace={pace}
        setPace={setPace}
        polyline={polyline}
        setPolyline={setPolyline}
        zoomCenter={zoomCenter}
        setZoomCenter={setZoomCenter}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
