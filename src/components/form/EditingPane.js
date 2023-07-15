import Navbar from "../ui/Navbar";
import TitleInput from "./TitleInput";
import ProfileSection from "../form-sections/ProfileSection";
import "./EditingPane.css";

import { useCallback, useMemo, useState } from "react";
import RouteSection from "../form-sections/RouteSection";

const EditingPane = () => {
  const [title, setTitle] = useState("Untitled run");
  const [profileImg, setProfileImg] = useState(
    require("../../assets/profile.png")
  );
  const [name, setName] = useState("");

  return (
    <div id="editingpane-container">
      <Navbar />
      <div id="form-container">
        <TitleInput
          title={title}
          setTitle={setTitle}
          defaultTitle={"Untitled run"}
          charLimit={30}
        />
        <ProfileSection
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          name={name}
          setName={setName}
        />
        <RouteSection />
      </div>
    </div>
  );
};

export default EditingPane;
