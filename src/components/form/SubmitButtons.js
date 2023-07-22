import { FiDownload } from "react-icons/fi";
import "./SubmitButtons.css";

const SubmitButtons = () => {
  return (
    <div className="submit-btns-container form-section-container">
      <div className="download-btn">
        <FiDownload size={"20px"} />
      </div>
      <button id="save-btn">Save</button>
    </div>
  );
};

export default SubmitButtons;
