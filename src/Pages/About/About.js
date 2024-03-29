import "./About.css";
import man from "../../images/client-bg.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-section1">
        <img src={man} alt="" />
      </div>
      <div className="about-section2 container">
        <div className="about-box">
          <h1>
            <span>About</span> Me
          </h1>
          <div className="about-info">
            <p>
              Dynamic Full Stack Developer with proficiency in front-end and
              back-end technologies. Strong team player with intermediate-level
              expertise in Machine Learning, Networking, and Data Structures &
              Algorithms coding. Committed to continuous learning and
              contributing to innovative solutions
            </p>

            <NavLink className={"btn"} to="/contact">
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
