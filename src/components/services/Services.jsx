import "./services.scss";
import logo from "../../img/logo.svg";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="body-container">
        <h1>My Services</h1>
        <div className="services-wrapper">
          <div className="services-text">
            <h2>Web Development</h2>
            <p>UI/UX Frontend Backend Fullstack</p>
            <p>C# .NET React.js JavaScript HTML CSS SCSS</p>
          </div>
          <div className="services-img">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="services-wrapper">
          <div className="services-img">
            <img src={logo} alt="" />
          </div>
          <div className="services-text">
            <h2>Software Development</h2>
            <p>UI/UX | Windows | X-Platform</p>
            <p>C# .NET | WPF | XAML | UWP | Winforms</p>
          </div>
        </div>
        <div className="services-wrapper">
          <div className="services-text">
            <h2>Mobile Development</h2>
            <p>UI/UX - Frontend - Backend - Fullstack</p>
            <p>React Native C# .NET</p>
          </div>
          <div className="services-img">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
