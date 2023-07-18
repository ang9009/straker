import { FiFileText } from "react-icons/fi";
import "./RunDataSection.css";

const RunDataSection = () => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiFileText size={"13px"} color={"var(--primaryIconColor)"} />
        <p>Run data</p>
      </h1>
    </div>
  );
};

export default RunDataSection;
