import Cropper from "react-easy-crop";
import ReactModal from "react-modal";
import "./CropperModal.css";
import { cropperStyles } from "../../data/cropperStyles";
import { modalStyles } from "../../data/modalStyles";
import { useCallback, useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import getCroppedImg from "../../utils/cropImage";

const CropperModal = ({ profileImg, setProfileImg, isOpen, setIsOpen }) => {
  // Cropper
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    console.log(croppedAreaPixels);
  }, []);

  const applyCrop = async () => {
    const croppedImgUrl = await getCroppedImg(profileImg, croppedAreaPixels);
    setProfileImg(croppedImgUrl);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyles}
      closeTimeoutMS={500}
      onRequestClose={() => {
        setProfileImg("../../assets/profile.png");
        setIsOpen(false);
      }}
    >
      <div className="modal-top">
        <div className="title-and-cropper-container">
          <h1 id="modal-title">Edit image</h1>
          <div id="cropper-container">
            <Cropper
              cropShape={"round"}
              image={profileImg}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropComplete={onCropComplete}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              showGrid={false}
              style={cropperStyles}
            />
          </div>
        </div>
        {/* TODO: replace with slider component? */}
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
        <PrimaryButton
          text={"Cancel"}
          background={"none"}
          color={"black"}
          padding={"10px 15px"}
          border={"none"}
          borderRadius={"5px"}
          fontWeight={500}
          marginLeft={"auto"}
          onClick={() => setIsOpen(false)}
        />
        <PrimaryButton
          text={"Apply"}
          background={"black"}
          color={"white"}
          padding={"10px 15px"}
          border={"none"}
          borderRadius={"5px"}
          fontWeight={500}
          marginLeft={"10px"}
          hoverColor={"gray"}
          onClick={() => {
            applyCrop();
            setIsOpen(false);
          }}
        />
      </div>
    </ReactModal>
  );
};

export default CropperModal;
