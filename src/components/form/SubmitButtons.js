import { FiDownload } from "react-icons/fi";
import "./SubmitButtons.css";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import download from "downloadjs";

const SubmitButtons = () => {
  const save = () => {
    var node = document.getElementById("phone-screen-container");

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        download(dataUrl, "fake-run.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="submit-btns-container form-section-container">
      <button id="save-btn" onClick={save}>
        Save
      </button>
    </div>
  );
};

export default SubmitButtons;
