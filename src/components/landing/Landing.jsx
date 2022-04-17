import "./landing.scss";

export default function Landing() {
  return (
    <div className="landing" id="landing">
      <a href="#services" className="skip-link">
        Skip to content
      </a>
      <div className="body-container">
        <svg viewBox="0 0 450 450">
          <defs>
            <path
              id="circle"
              d="M243.2, 382.4c-74.8,   
    0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
    135.5 S318, 382.4, 243.2, 382.4z"
            />
          </defs>
          <text>
            <textPath xlinkHref="#circle">UI/UX Frontend Backend</textPath>
          </text>
        </svg>
        <h1>Digital Carpentry.</h1>
        <h2>
          Making <span>IT</span> all come full circle
        </h2>
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
        <a className="landing-btn" href="#services">
          Explore more
        </a>
      </div>

      <a className="scroll" href="#services">
        <span></span>
      </a>
    </div>
  );
}
