import { FiFileText } from "react-icons/fi";
import "./RunInfoSection.css";
import DateTimePicker from "react-datetime-picker";
import TextInput from "../form/TextInput";

const RunInfoSection = ({ value, onChange, location, setLocation }) => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiFileText size={"13px"} color={"var(--primaryIconColor)"} />
        <p>Run info</p>
      </h1>
      <div id="date-time-container">
        <p className="input-label">Date and time</p>
        <DateTimePicker
          onChange={onChange}
          value={value}
          className={"date-time-picker"}
          calendarClassName={"date-time-widgets"}
          disableClock={true}
        />
      </div>
      <TextInput
        inputLabel={"Location"}
        placeholder={"Enter location"}
        content={location}
        setContent={setLocation}
      />
    </div>
  );
};

export default RunInfoSection;
