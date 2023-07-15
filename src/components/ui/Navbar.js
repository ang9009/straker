import { Tooltip } from "react-tooltip";
import "./Navbar.css";
import { FiInfo, FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div id="logo-container">
        STRAKER
        <a data-tooltip-id="info-tooltip">
          <FiInfo color={"var(--primaryIconColor)"} />
        </a>
        <Tooltip id="info-tooltip" style={{ zIndex: "9999" }}>
          <div
            style={{
              fontWeight: "normal",
              textAlign: "center",
              width: "200px",
            }}
          >
            Generate screenshots of fake Strava runs! Created as a gag project.{" "}
          </div>
        </Tooltip>
      </div>
      <FiMenu size={"20px"} />
    </nav>
  );
};

export default Navbar;
