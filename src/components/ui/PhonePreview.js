import "./PhonePreview.css";
import iphone from "../../assets/iphone_frame.png";

const PhonePreview = () => {
  return (
    <div id="phone-container">
      <img id="iphone-frame" src={iphone} />
    </div>
  );
};

export default PhonePreview;
