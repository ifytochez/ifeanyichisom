import React from "react";
import "./Footer.css";
import Logo from "./images/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SiMedium } from "react-icons/si";
import { ImBehance } from "react-icons/im";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="foot">
        <img className="header-logo" src={Logo} alt="logo" />

        <div className="copyright">
          <small>© COPYRIGHT 2021. All RIGHTS RESERVED.</small>
        </div>

        <div className="social-media">
          <li className="medium-icon">
            <a href="https://ifeanyichisom.medium.com/">
              <SiMedium />
            </a>
          </li>
          <li className="linkedin-icon">
            <a href="https://www.linkedin.com/in/chisomifeanyi/">
              <LinkedInIcon />
            </a>
          </li>
          <li className="behance-icon">
            <a href="https://www.behance.net/ifeanyichisom">
              <ImBehance />
            </a>
          </li>
          <li className="whatsapp-icon">
            <a
              href=" https://api.whatsapp.com/send?phone=+2348100166706&text&app_absent=0
             "
            >
              <WhatsAppIcon />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
