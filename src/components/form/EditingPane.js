import Navbar from "../ui/Navbar";
import TitleInput from "./TitleInput";
import ProfileSection from "../form-sections/ProfileSection";
import "./EditingPane.css";

import { useState } from "react";
import RouteSection from "../form-sections/RouteSection";
import RunInfoSection from "../form-sections/RunInfoSection";
import RunDataSection from "../form-sections/RunDataSection";

const EditingPane = () => {
  // Profile section
  const [title, setTitle] = useState("Untitled run");
  const [profileImg, setProfileImg] = useState(
    require("../../assets/profile.png")
  );
  const [name, setName] = useState("");

  // Route section
  const [selectedStartLocation, setSelectedStartLocation] = useState([]);
  const [selectedEndLocation, setSelectedEndLocation] = useState([]);

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

  return (
    <div id="editingpane-container">
      <Navbar />
      <div id="form-container">
        <TitleInput
          title={title}
          setTitle={setTitle}
          defaultTitle={"Untitled run"}
          charLimit={30}
        />
        <ProfileSection
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          name={name}
          setName={setName}
        />
        <RouteSection
          selectedStartLocation={selectedStartLocation}
          setSelectedStartLocation={setSelectedStartLocation}
          selectedEndLocation={selectedEndLocation}
          setSelectedEndLocation={setSelectedEndLocation}
          setDistance={setDistance}
          setElevationGain={setElevationGain}
        />
        <RunInfoSection
          value={dateTimeValue}
          onChange={dateTimeOnChange}
          location={location}
          setLocation={setLocation}
        />
        <RunDataSection
          distance={distance}
          elevationGain={elevationGain}
          onChange={timeOnChange}
          caloriesBurned={caloriesBurned}
          value={timeValue}
          setCaloriesBurned={setCaloriesBurned}
          heartRate={heartRate}
          setHeartRate={setHeartRate}
          pace={pace}
          setPace={setPace}
        />
      </div>
    </div>
  );
};

export default EditingPane;
