import React from "react";
import "../Styles/Homepage.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import SnowStrom from "react-snowstorm";


const Homepage = () => {

  return (
    <React.Fragment>
      <Element id="home" name="home">
        <SnowStrom flakesMaxActive={150} flakesMax={200}/>
        <div className="homePage">
          <div className="name">
            <h1 className="myName">
              HARTAJ <span className="SinghText">SINGH</span>
            </h1>
          </div>
          <div className="socialIcons">
            <a
              href="https://www.instagram.com/thehartajsingh/"
              target="_blank"
              rel="noreferrer"
              className="InstagramIcon"
            >
              <i className="fab fa-instagram fa-xs" id='insta'></i>
            </a>
            <a
              href="https://www.github.com/Hartaj-singh-dev"
              target="_blank"
              rel="noreferrer"
              className='GitHubIcon'
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hartaj-singh-sidhu-9068661ba/"
              target="_blank"
              rel="noreferrer"
              className="LinkedinIcon"
            >
             <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://twitter.com/thehartajsingh"
              target="_blank"
              rel="noreferrer"
              className="TwitterIcon"
            >
             <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a
              href="https://discord.gg/b5J7zDp2qe"
              target="_blank"
              rel="noreferrer"
              className="discordIcon"
            >
              <i className="fab fa-discord fa-3x"></i>
            </a>
            
          </div>
          <div className="Arrow" style={{flexDirection:'column'}}>
            <h4 className="Readmore">Read More</h4>
            <Link to="about" spy={true} smooth={true} duration={50} >
              <IconButton className="ArrowIcon">
                <ArrowDownwardIcon fontSize="large"></ArrowDownwardIcon>
              </IconButton>
            </Link>
          </div>
        </div>
       
      </Element>
    </React.Fragment>
  );
};

export default Homepage;
