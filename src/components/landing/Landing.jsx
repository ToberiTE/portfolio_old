import "./landing.scss";
import photo from "../../img/photo.jpg";
import bubble from "../../img/bubble.svg";

export default function Landing() {
  return (
    <div className="landing">
      <img alt="portrait" src={photo} className={`photo-fade-in photo`}></img>
      <img alt="svg" src={bubble} className={`bubble-fade-in-out bubble`}></img>
      <div className={`text-fade-in span-wrapper`}>
        <span>Web Developer</span>
        <span>Software Developer</span>
        <span>IT Generalist</span>
        <span>Security Enthusiast</span>
      </div>
    </div>
  );
}
