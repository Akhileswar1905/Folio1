import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import phone from "../../images/phone.png";
import msg from "../../images/msg.png";
import share from "../../images/share.png";
const Contact = () => {
  return (
    <>
      <h1 className="heading">
        <span>Conta</span>ct Me
      </h1>
      <div className="main">
        <div className="contact">
          <div className="contact-box">
            <div className="img">
              <img className="image" src={msg} alt="email" />
            </div>
            <div className="contact-info">
              <div className="gold">Email</div>
              <div>ch.benerjeereddy@gmail.com</div>
            </div>
          </div>
          <div className="contact-box">
            <div className="img">
              <img className="image" src={phone} alt="phone" />
            </div>
            <div className="contact-info">
              <div className="gold">Phone Number</div>
              <div>+91 8019775823 </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="img">
              <img className="image" src={share} alt="social" />
            </div>
            <div className="contact-info">
              <div className="gold">Social Media</div>
              <div>
                <a href="https://www.linkedin.com/in/benerjee-reddy-46643125b/">
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/Bennu17">
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
