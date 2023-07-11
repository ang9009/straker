import "./Navbar.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div id="logo">STRAKER</div>
      <FiMenu size={"20px"} className={"test"} />
    </nav>
  );
};

export default Navbar;
