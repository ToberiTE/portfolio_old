import React, { useEffect, useState } from "react";
import "./themetoggle.scss";
import { setTheme } from "../../themes";

export default function Themetoggle() {
  const [active, setActive] = useState(false);
  let theme = localStorage.getItem("theme");

  const clickHandler = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setTheme("light-theme");
      setActive(true);
    } else {
      setTheme("dark-theme");
      setActive(false);
    }
  };

  const handleKeypress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setActive(false);
    } else if (localStorage.getItem("theme") === "light-theme") {
      setActive(true);
    }
  }, [theme]);

  return (
    <div className="container-toggle">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        onClick={clickHandler}
        onKeyUp={handleKeypress}
        checked={active}
        readOnly
        aria-label="Toggle Theme"
      />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
}
