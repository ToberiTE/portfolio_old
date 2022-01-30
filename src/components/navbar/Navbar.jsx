import "./navbar.scss";
import logo from "../../img/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#landing" className="logo">
        <img src={logo} alt="logo"></img>
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
      </nav>
    </div>
  );
}
