import "./About.css";
import man from "../../images/Experiment.jpg";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ex ipsam veniam odit in voluptatibus aliquid fugit sit.
            </p>
            <p>
              Debitis enim vel cumque beatae mollitia. In quaerat dolorem odio
              recusandae inventore?
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
