import { FiFileText } from "react-icons/fi";
import "./RunDataSection.css";
import TextInput from "../form/TextInput";
import { InputNumber, TimePicker } from "antd";
import { useEffect } from "react";
import { getPace } from "../../utils/getPace";

const RunDataSection = ({
  distance,
  elevationGain,
  value,
  onChange,
  caloriesBurned,
  setCaloriesBurned,
  heartRate,
  setHeartRate,
  pace,
  setPace,
}) => {
  useEffect(() => {
    if (value && distance) {
      const pace = getPace(value, distance);
      setPace(pace);
    }
  }, [distance, value]);

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
            value={value}
            onChange={(time) => {
              onChange(time);
            }}
          />
        </div>
        <div>
          <p className="input-label">Calories</p>
          <InputNumber
            placeholder={"Enter calories burned"}
            value={caloriesBurned}
            onChange={setCaloriesBurned}
          />
        </div>
        <div>
          <p className="input-label">Average heart rate (bpm)</p>
          <InputNumber
            placeholder={"E.g. 130"}
            value={heartRate}
            onChange={setHeartRate}
          />
        </div>
        <TextInput
          inputLabel={"Average pace (min/km)"}
          placeholder={"Automatically calculated"}
          content={pace}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

export default RunDataSection;
