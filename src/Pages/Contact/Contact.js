import "./Contact.css";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
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
              <div>michaelxyz@gmail.com</div>
            </div>
          </div>
          <div className="contact-box">
            <div className="img">
              <img className="image" src={phone} alt="phone" />
            </div>
            <div className="contact-info">
              <div className="gold">Phone Number</div>
              <div>123 456 7890</div>
            </div>
          </div>
          <div className="contact-box">
            <div className="img">
              <img className="image" src={share} alt="social" />
            </div>
            <div className="contact-info">
              <div className="gold">Social Media</div>
              <div>
                <FaLinkedin className="icon" />
                <FaTwitterSquare className="icon" />
                <FaInstagram className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
