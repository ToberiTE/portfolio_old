import "./navbar.scss";
import logo from "../../img/logo.svg";
import Themetoggle from "../../components/themetoggle/Themetoggle";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#landing" className="logo">
        <img src={logo} alt="logo"></img>
      </a>
      <a href="#services" className="skip-link">
        Skip to content
      </a>
      <nav>
        <ul>
          <li>
            <a href="#services">
              <i className="fas fa-hands-helping icon"></i>Services
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fas fa-file-code icon"></i>Projects
            </a>
          </li>
        </ul>
        <Themetoggle />
      </nav>
    </div>
  );
}
