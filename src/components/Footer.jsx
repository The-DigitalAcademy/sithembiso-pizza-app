import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { WhatsApp } from "@material-ui/icons";
// import LinkedInIcon from "@material-ui/icons/LinkedInIcon";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon /> 
        <FacebookIcon /> 
        <WhatsApp />
        {/* <LinkedInIcon /> */}
      </div>
      <p> &copy; 2022 ssithembisosifisopizza@gmail.com</p>
    </div>
  );
}

export default Footer;