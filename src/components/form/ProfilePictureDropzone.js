import "./ProfilePictureDropzone.css";
import { FiFile } from "react-icons/fi";
import { useCallback, useState, useMemo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  focusedStyle,
  acceptStyle,
  rejectStyle,
} from "../../data/dropzoneStyles";
import CropperModal from "./CropperModal";

const ProfilePictureDropzone = ({ profileImg, setProfileImg }) => {
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

  return (
    <>
      {profileImg && (
        <CropperModal profileImg={profileImg} setProfileImg={setProfileImg} />
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

export default ProfilePictureDropzone;
