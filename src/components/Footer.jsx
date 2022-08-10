import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { WhatsApp } from "@material-ui/icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon /> 
        <WhatsApp />
      </div>
      <p> &copy; 2022 ssithembisosifisopizza@gmail.com</p>
    </div>
  );
}

export default Footer;