import Navbar from "../ui/Navbar";
import TitleInput from "./TitleInput";
import ProfileSection from "../form-sections/ProfileSection";
import "./EditingPane.css";

import RouteSection from "../form-sections/RouteSection";
import RunInfoSection from "../form-sections/RunInfoSection";
import RunDataSection from "../form-sections/RunDataSection";
import SubmitButtons from "./SubmitButtons";

const EditingPane = ({
  profileData,
  selectedStartLocation,
  setSelectedStartLocation,
  selectedEndLocation,
  setSelectedEndLocation,
  dateTimeValue,
  dateTimeOnChange,
  map,
  setMap,
  distance,
  setDistance,
  elevationGain,
  setElevationGain,
  timeValue,
  timeOnChange,
  caloriesBurned,
  setCaloriesBurned,
  heartRate,
  setHeartRate,
  pace,
  setPace,
  profileHandleChange,
  polyline,
  setPolyline,
  zoomCenter,
  setZoomCenter,
}) => {
  return (
    <div id="editingpane-container">
      <Navbar />
      <div id="form-container">
        <TitleInput
          title={profileData.title}
          handleTitleChange={profileHandleChange}
          defaultTitle={"Untitled run"}
          charLimit={30}
        />
        <ProfileSection
          profileData={profileData}
          profileHandleChange={profileHandleChange}
        />
        <RunInfoSection value={dateTimeValue} onChange={dateTimeOnChange} />
        <RouteSection
          selectedStartLocation={selectedStartLocation}
          setSelectedStartLocation={setSelectedStartLocation}
          selectedEndLocation={selectedEndLocation}
          setSelectedEndLocation={setSelectedEndLocation}
          setDistance={setDistance}
          setElevationGain={setElevationGain}
          polyline={polyline}
          setPolyline={setPolyline}
          zoomCenter={zoomCenter}
          setZoomCenter={setZoomCenter}
        />
        <RunDataSection
          distance={distance}
          elevationGain={elevationGain}
          caloriesBurned={caloriesBurned}
          value={timeValue}
          onChange={timeOnChange}
          setCaloriesBurned={setCaloriesBurned}
          heartRate={heartRate}
          setHeartRate={setHeartRate}
          pace={pace}
          setPace={setPace}
        />
        <SubmitButtons />
      </div>
    </div>
  );
};

export default EditingPane;
