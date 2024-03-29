import "./Home.css";
import man from "../../images/client-nobg.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home-section1">
        <div className="home-info">
          <div className="h2">Hi There</div>
          <div className="h1">I'm Benerjee</div>
          <div className="h3 static-txt">
            I'm a
            <div className="wrapper">
              <ul className="dynamic-txt">
                <li>
                  <span>ML Engineer</span>
                </li>
                <li>
                  <span>Developer</span>
                </li>
                <li>
                  <span>Designer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2">
        <img src={man} alt="img" className="man" />
      </div>
    </div>
  );
};

export default Home;
