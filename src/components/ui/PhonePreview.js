import "./PhonePreview.css";
import iphone from "../../assets/iphone_frame.png";
import screenshot from "../../assets/screenshot.png";
import battery from "../../assets/battery.svg";
import cellsignal from "../../assets/cellsignal.svg";
import { FiChevronLeft, FiNavigation } from "react-icons/fi";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const PhonePreview = () => {
  return (
    <div id="phone-container">
      <img id="iphone-frame" src={iphone} />
      <img src={screenshot} alt="" id="screenshot" />
      <div id="phone-screen-container">
        <div id="phone-status-bar">
          <div id="time">1:48</div>
          <div id="status-icons">
            <img src={cellsignal} alt="" id="cell-signal-icon" />
            <img src={battery} alt="" id="battery-icon" />
          </div>
        </div>
        <div id="phone-top-nav">
          <div id="feed-btn">
            <FiChevronLeft size={"27px"} />
            <p>Feed</p>
          </div>
          <div id="run-text">Run</div>
          <PiDotsThreeOutlineLight id={"three-dots"} size={"18px"} />
        </div>
        <div id="run-info-container"></div>
      </div>
    </div>
  );
};

export default PhonePreview;
