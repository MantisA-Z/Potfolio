import React from "react";
import "./Intro.css";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaDiscord as DiscordIcon } from "react-icons/fa6";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <div className="intro-text">
          <h2>Hey, It's mantis here</h2>
          <p>
            I'm a web developer from India. I'm a beginner in react but I've
            have build a couple of projects. I have the knowledge of HTML, CSS,
            Java Script, React, Node Js, Mongo DB. I use cloudinary for storing
            files. I'm in eighth standard currently. That is my profile image on
            the right side. Yeah kinda creepy, that is why I have used it.
          </p>
        </div>
        <div className="profile-image">
          <img src="/profile-pic.png" alt="" />
          <h2>
            <a href="https://github.com/mantisA-Z">
              <GithubIcon />
            </a>
            <a href="https://discord.com/users/1184072960462557189">
              <DiscordIcon />
            </a>
          </h2>
        </div>
        <div className="social-media"></div>
      </div>
    </div>
  );
};

export default Intro;
