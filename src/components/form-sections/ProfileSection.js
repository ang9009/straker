import ProfilePictureDropzone from "../form/ProfilePictureDropzone";
import { FiUser } from "react-icons/fi";
import "./ProfileSection.css";
import TextInput from "../form/TextInput";

const ProfileSection = ({ profileData, profileHandleChange }) => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiUser color={"var(--primaryIconColor)"} />
        <p>Profile</p>
      </h1>
      <div className="form-section-inputs-container">
        <ProfilePictureDropzone
          profileImg={profileData.profileImg}
          setProfileImg={(e) => profileHandleChange(e)}
        />
        <TextInput
          inputLabel={"Name"}
          placeholder={"e.g. John Doe"}
          content={profileData.name}
          setContent={profileHandleChange}
          name={"name"}
        />
      </div>
    </div>
  );
};

export default ProfileSection;
