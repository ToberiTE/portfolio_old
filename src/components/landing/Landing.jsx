import "./landing.scss";
import smile from "../../img/smile.svg";

export default function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="body-container">
        <h1>DigitalCarpentry.</h1>
        <h1>
          Turning Ideas &#8594;
          <img className="smile-icon" src={smile} alt="smile-img"></img>
        </h1>
        <div className="social-container fade-in">
          <p className="social-text">Meet Tobias</p>
          <div className="social-links-wrapper">
            <a
              className="social-link"
              href="https://github.com/ToberiTE"
              target="_blank"
              rel="noreferrer"
              data-tooltip="GitHub"
              aria-label="Github profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/toberi/"
              target="_blank"
              rel="noreferrer"
              data-tooltip="LinkedIn"
              aria-label="Linkedin profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="titles-wrapper">
          <ul>
            <li className="li-1">
              <p>Developer</p>
            </li>
            <li className="li-2">
              <p>Technical Writer</p>
            </li>
            <li className="li-3">
              <p>IT Generalist</p>
            </li>
            <li className="li-4">
              <p>Security Enthusiast</p>
            </li>
          </ul>
        </div>
      </div>

      <a className="scroll scroll-fade-in" href="#services">
        <span></span>
        Scroll
      </a>
    </div>
  );
}
