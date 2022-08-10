import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { WhatsApp } from "@material-ui/icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/ target = _blank">
          <FacebookIcon />
        </a>
         
        <a href="https://web.whatsapp.com/ target = _blank">
          <WhatsApp />
        </a>
        
      </div>
      <p> &copy; 2022 ssithembisosifisopizza@gmail.com</p>
    </div>
  );
}

export default Footer;