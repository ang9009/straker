import ProfilePictureDropzone from "./ProfilePictureDropzone";
import { FiUser } from "react-icons/fi";
import "./ProfileSection.css";

const ProfileSection = ({ profileImg, setProfileImg }) => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiUser color={"var(--primaryIconColor)"} />
        <span>Profile</span>
      </h1>
      <ProfilePictureDropzone
        profileImg={profileImg}
        setProfileImg={setProfileImg}
      />
    </div>
  );
};

export default ProfileSection;
