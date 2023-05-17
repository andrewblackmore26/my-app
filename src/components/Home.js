import React from "react";
import '../styles/Home.css';
import {FaInstagram, FaGithub, FaTiktok} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

function Home() {
  return (
    <div className="home-container" name="about">
      <h2>Welcome to my portfolio website</h2>
      <p>
      I am passionate about creating value with software, whether it be for business or entertainment<br></br>
      New projects that I embark on and complete will be uploaded/linked here <br></br>
      Currently I am a student at UNSW, graduating in the year 2024 <br></br>
      Outside of software engineering, I enjoy sport and have been going to the gym for over a year <br></br>
      I have a wide range of experiences, ranging from entrepreneur, content creator and programmer<br></br>     
      And I hope to share those experiences with you guys!<br></br>
      </p>     
      <div className="icons">
      <a  href="https://www.instagram.com/andrewblackmore0" >
      <FaInstagram className="icon" />
      </a>
      <a href="https://github.com/andrewblackmore26" >
      <FaGithub className="icon" />
      </a>
      <a href="mailto:andrewblackmore95@gmail.com" >
      <FiMail className="icon" />
      </a>
      <a href="https://www.tiktok.com/@andrewblackmore0" >
      <FaTiktok className="icon" />
      </a>
      </div>
    </div>
  );
}

export default Home;