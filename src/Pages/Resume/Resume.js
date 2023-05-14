import "./Resume.css";
import edu from "../../images/edu.png";
import com from "../../images/com.png";
import { NavLink } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <h1 className="heading">
        <span>Resu</span>me
      </h1>
      <div className="resume">
        <div className="resume-section1">
          <div className="img">
            <img src={edu} alt="" />
          </div>
          <div className="edu-info">
            <div className="info">
              <p>BTech in Computer Science</p>
              <p className="gold">2021 - 2025</p>
            </div>
            <div className="info">
              <p>MS in Artificial Intelligence</p>
              <p className="gold">20xx - 20xx</p>
            </div>
          </div>
        </div>
        <div className="resume-section2">
          <div className="img">
            <img src={com} alt="" />
          </div>
          <div className="exp-info">
            <div className="info">
              <p>Web Developer</p>
              <p className="gold">20xx - 20xx</p>
            </div>
            <div className="info">
              <p>Machine Learning Enginner</p>
              <p className="gold">20xx - 20xx</p>
            </div>
          </div>
        </div>
      </div>
      <div className="down">
        <NavLink className={" down btn"} to="/">
          Download My Resume
        </NavLink>
      </div>
    </>
  );
};

export default Resume;
