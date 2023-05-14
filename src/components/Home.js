import React from "react";
import '../styles/Home.css';
import {FaInstagram, FaGithub} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to my portfolio website</h2>
      <p>Here you can find information about me and my work <br></br>
      Whether it be new projects or new experiences, these events will be uploaded/linked to here <br></br>
      Currently I am a student at UNSW, graduating in the year 2024 <br></br>
      I have a wide range of experiences, ranging from entrepreneur, content creator and programmer<br></br>
      With the huge changes coming from tech in the near future, I plan to ride that wave<br></br>
      And share those experiences with you guys!<br></br>
      </p>     
      <div className="icons">
      <a  href="https://www.instagram.com/andrewblackmore0" target="_blank">
      <FaInstagram className="icon" />
      </a>
      <a href="https://github.com/andrewblackmore26" target="_blank">
      <FaGithub className="icon" />
      </a>
      <a href="mailto:andrewblackmore95@gmail.com" target="_blank">
      <FiMail className="icon" />
      </a>
      </div>
    </div>
  );
}

export default Home;