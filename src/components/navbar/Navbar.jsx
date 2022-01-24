import "./navbar.scss";
import logo from "../../img/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="website logo" />
    </div>
  );
}
