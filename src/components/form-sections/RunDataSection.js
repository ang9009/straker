import { FiFileText } from "react-icons/fi";
import "./RunDataSection.css";
import TextInput from "../form/TextInput";
import TimePicker from "react-time-picker";

const RunDataSection = ({
  distance,
  elevationGain,
  onChange,
  value,
  caloriesBurned,
  setCaloriesBurned,
  heartRate,
  setHeartRate,
}) => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiFileText size={"13px"} color={"var(--primaryIconColor)"} />
        <p>Run data</p>
      </h1>
      <div className="data-inputs-container">
        <TextInput
          inputLabel={"Distance (km)"}
          placeholder={"Automatically calculated"}
          content={distance}
          isDisabled={true}
        />
        <TextInput
          inputLabel={"Elevation gain (m)"}
          placeholder={"Automatically calculated"}
          content={elevationGain}
          isDisabled={true}
        />
        <div className="time-picker-input">
          <p className="input-label">Moving time</p>
          <TimePicker
            disableClock={true}
            format={"hh:mm:ss"}
            hourPlaceholder={"hh"}
            minutePlaceholder={"mm"}
            secondPlaceholder={"ss"}
            onChange={onChange}
            value={value}
          />
        </div>
        <TextInput
          inputLabel={"Calories"}
          placeholder={"Enter calories burned"}
          content={caloriesBurned}
          setContent={setCaloriesBurned}
        />
        <TextInput
          inputLabel={"Average heart rate (bpm)"}
          placeholder={"E.g. 130 bpm"}
          content={heartRate}
          setContent={setHeartRate}
        />
        <TextInput
          inputLabel={"Average pace"}
          placeholder={"Automatically calculated"}
          content={elevationGain}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

export default RunDataSection;
