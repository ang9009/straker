import { FiFileText } from "react-icons/fi";
import "./RunInfoSection.css";
import DateTimePicker from "react-datetime-picker";

const RunInfoSection = ({ value, onChange }) => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiFileText size={"13px"} color={"var(--primaryIconColor)"} />
        <p>Run info</p>
      </h1>
      <div className="form-section-inputs-container">
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
      </div>
    </div>
  );
};

export default RunInfoSection;
