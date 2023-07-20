import ProfilePictureDropzone from "../form/ProfilePictureDropzone";
import { FiUser } from "react-icons/fi";
import "./ProfileSection.css";
import TextInput from "../form/TextInput";

const ProfileSection = ({ profileImg, setProfileImg, name, setName }) => {
  return (
    <div className="form-section-container">
      <h1 className="form-section-title">
        <FiUser color={"var(--primaryIconColor)"} />
        <p>Profile</p>
      </h1>
      <div className="form-section-inputs-container">
        <ProfilePictureDropzone
          profileImg={profileImg}
          setProfileImg={setProfileImg}
        />
        <TextInput
          inputLabel={"Name"}
          placeholder={"e.g. John Doe"}
          content={name}
          setContent={setName}
        />
      </div>
    </div>
  );
};

export default ProfileSection;
