import React from "react";
import Pizzawors from "../assets/pizzawors.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Pizzawors})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are committed to satisfying customer needs and expectations by giving them amazing pizza with the best quality and customer service.

          Choose Pizza for any occasion, whether you’re having dinner with the family or watching a football game with friends, we give you the best experience bursting with flavour.

          We pride ourselves in delivering hot, fresh pizza no matter where you’re having it. Try something amazing, try Pizza!
        </p>
      </div>
    </div>
  );
}

export default About;