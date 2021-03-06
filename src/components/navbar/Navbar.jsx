import "./navbar.scss";
import Themetoggle from "../../components/themetoggle/Themetoggle";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navRef = useRef();
  const handleClick = (e) => {
    if (!navRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return (
    <div className="navbar" ref={navRef}>
      <a href="#landing" className="logo" aria-label="website logo">
        {" "}
      </a>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="nav"
        aria-expanded={open}
        className="nav-btn"
      >
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>

        <span className="sr-only">Menu</span>
      </button>

      <nav data-visible={open}>
        <ul>
          <li>
            <a onClick={() => setOpen(!open)} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(!open)} href="#work">
              Work
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(!open)} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <Themetoggle />
      </nav>
    </div>
  );
}
