import "./ProfilePictureDropzone.css";
import { FiFile } from "react-icons/fi";
import { useCallback, useState, useMemo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  focusedStyle,
  acceptStyle,
  rejectStyle,
} from "../../data/dropzoneStyles";
import Cropper from "react-easy-crop";
import ReactModal from "react-modal";
import { cropperStyles } from "../../data/cropperStyles";
import { modalStyles } from "../../data/modalStyles";

const ProfilePictureInput = ({ profileImg, setProfileImg }) => {
  // Dropzone
  const onDrop = useCallback((file) => {
    setProfileImg(URL.createObjectURL(file[0]));
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [] },
      multiple: false,
    });

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  // Cropper
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <>
      // TODO: move this into a separate component
      {profileImg && (
        <ReactModal
          isOpen={profileImg !== "../../assets/profile.png"}
          style={modalStyles}
          closeTimeoutMS={500}
          onRequestClose={() => {
            setProfileImg("../../assets/profile.png");
          }}
        >
          <div className="modal-top">
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
        </ReactModal>
      )}
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        <FiFile color={"var(--primaryIconColor)"} />
        <p>
          <span>Click to upload</span> or drag and drop...
        </p>
      </div>
    </>
  );
};

export default ProfilePictureInput;
