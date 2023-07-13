import Navbar from "../ui/Navbar";
import TitleInput from "./TitleInput";
import ProfileSection from "./ProfileSection";
import "./EditingPane.css";

import { useCallback, useMemo, useState } from "react";

const EditingPane = () => {
  // Title input
  const [title, setTitle] = useState("Untitled run");

  // Dropzone
  const [profileImg, setProfileImg] = useState("../../assets/profile.png");

  return (
    <div id="sidebar-container">
      <Navbar />
      <div id="form-container">
        <TitleInput
          title={title}
          setTitle={setTitle}
          defaultTitle={"Untitled run"}
          charLimit={30}
        />
        <ProfileSection profileImg={profileImg} setProfileImg={setProfileImg} />
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default EditingPane;
