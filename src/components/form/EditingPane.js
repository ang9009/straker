import Navbar from "../ui/Navbar";
import TitleInput from "./TitleInput";
import "./EditingPane.css";
import { useState } from "react";

const EditingPane = () => {
  const [title, setTitle] = useState("Untitled run");

  return (
    <div id="sidebar-container">
      <Navbar />
      <div id="form-container">
        <TitleInput title={title} setTitle={setTitle} />
      </div>
    </div>
  );
};

export default EditingPane;
