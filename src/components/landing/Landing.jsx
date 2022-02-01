import "./landing.scss";
import smile from "../../img/smile.svg";

export default function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="body-container">
        <h1>DigitalCarpentry.</h1>
        <h1 className="border-anchor">
          Turning Ideas &gt;
          <img className="smile-icon" src={smile} alt=""></img>
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
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/toberi/"
              target="_blank"
              rel="noreferrer"
              data-tooltip="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="text-wrapper typewriter">
          <p>Developer</p>
          <p>Technical Writer</p>
          <p>IT Generalist</p>
          <p>Security Enthusiast</p>
        </div>
      </div>
      <a className="scroll scroll-fade-in" href="#services">
        <span></span>
        Scroll
      </a>
    </div>
  );
}
