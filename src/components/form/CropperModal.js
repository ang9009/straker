import Cropper from "react-easy-crop";
import ReactModal from "react-modal";
import "./CropperModal.css";
import { cropperStyles } from "../../data/cropperStyles";
import { modalStyles } from "../../data/cropModalStyles";
import { useCallback, useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import getCroppedImg from "../../utils/cropImage";
import { FiImage } from "react-icons/fi";

const CropperModal = ({ setProfileImg, isOpen, setIsOpen, croppedImg }) => {
  // Cropper
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const resetZoomCrop = () => {
    setZoom(1);
    setCrop({ x: 0, y: 0 });
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const applyCrop = async () => {
    const croppedImgUrl = await getCroppedImg(croppedImg, croppedAreaPixels);
    setProfileImg({ target: { value: croppedImgUrl, name: "profileImg" } });
    resetZoomCrop();
  };

  // Modal
  const handleCancel = () => {
    setIsOpen(false);
    resetZoomCrop();
  };

  const handleApply = () => {
    setIsOpen(false);
    applyCrop();
    resetZoomCrop();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyles}
      closeTimeoutMS={500}
      onRequestClose={() => {
        resetZoomCrop();
        setIsOpen(false);
      }}
    >
      <div className="modal-top">
        <div className="title-and-cropper-container">
          <h1 id="modal-title">Edit image</h1>
          <div id="cropper-container">
            <Cropper
              cropShape={"round"}
              image={croppedImg}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropComplete={onCropComplete}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              showGrid={false}
              style={cropperStyles}
              objectFit={"horizontal-cover"}
            />
          </div>
        </div>
        <div className="controls">
          <FiImage color={"var(--primaryIconColor)"} size={"25px"} />
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
          <FiImage color={"var(--primaryIconColor)"} size={"40px"} />
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
          onClick={handleCancel}
          hoverColor={"rgba(0, 0, 0, 0.05)"}
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
          hoverColor={"rgba(0, 0, 0, 0.70)"}
          onClick={handleApply}
        />
      </div>
    </ReactModal>
  );
};

export default CropperModal;
