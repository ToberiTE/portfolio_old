import "./services.scss";
import logo from "../../img/logo.svg";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="body-container">
        <h1>My Services</h1>
        <div className="services-item services-wrapper">
          <div>
            <h2>Web Development</h2>
            <p>Design Frontend Backend Fullstack</p>
            <p>.NET C# React JavaScript HTML CSS SCSS</p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="services-item services-wrapper">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>Software Development</h2>
            <p>Windows X-Platform</p>
            <p>Current technologies I use:</p>
          </div>
        </div>
        <div className="services-item services-wrapper flex">
          <div>
            <h2>Web Development</h2>
            <p>Design - Frontend - Backend - Fullstack</p>
            <p>Current technologies I use:</p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
