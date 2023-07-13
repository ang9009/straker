import Cropper from "react-easy-crop";
import ReactModal from "react-modal";
import "./CropperModal.css";
import { cropperStyles } from "../../data/cropperStyles";
import { modalStyles } from "../../data/modalStyles";
import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const CropperModal = ({ profileImg, setProfileImg }) => {
  // Cropper
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <ReactModal
      isOpen={profileImg !== "../../assets/profile.png"}
      style={modalStyles}
      closeTimeoutMS={500}
      onRequestClose={() => {
        setProfileImg("../../assets/profile.png");
      }}
    >
      <div className="modal-top">
        <div className="title-and-cropper-container">
          <h1 id="modal-title">Edit image</h1>
          <div id="cropper-container">
            <Cropper
              cropShape={"round"}
              image={profileImg}
              alt={"nope"}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              showGrid={false}
              style={cropperStyles}
            />
          </div>
        </div>
        {/* Replace with slider component? */}
        <div className="controls">
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e) => {
              setZoom(e.target.value);
            }}
            className="zoom-range"
          />
        </div>
      </div>
      <div className="modal-bottom">
        {/* TODO: stop being lazy and do this properly */}
        <PrimaryButton
          text={"Cancel"}
          backgroundColor={"none"}
          color={"black"}
          padding={"10px 15px"}
          borderRadius={"5px"}
          marginLeft={"auto"}
        />
        <PrimaryButton
          text={"Apply"}
          backgroundColor={"black"}
          color={"#fff"}
          padding={"10px 15px"}
          borderRadius={"5px"}
        />
      </div>
    </ReactModal>
  );
};

export default CropperModal;
