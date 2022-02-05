import React, { useState } from "react";
import "../styles/About.scss";
import { Element } from "react-scroll";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { Link } from "react-scroll";
import MyPic from "../Assets/AnyConv.com__Favicon.jpg";

const About = () => {
  // const [TypeEffect, setTypeEffect] = useState(false);
  // const typeEffect = () => {
  //   if (window.scrollY >= 500) {
  //     setTypeEffect(true);
  //   } else {
  //     setTypeEffect(false);
  //   }
  // };
  // window.addEventListener("scroll", typeEffect);
  return (
    <React.Fragment>
      <Element id="about" name="about">
        <div className="About">
          <div className="aboutHeader">
            <div className="textAnimation">
              <h1 className="Type" >
               
                {/* {TypeEffect ? ( <Typist>Hi , I am Hartaj Singh , Entreprenuer | Web developer</Typist>  ) : (
                  ""
                )} */}
              </h1>
            </div>
          </div>
          <div className="bioData">
            <div className="MyPic">
              <img
                src={MyPic}
                alt=""
                className="MyPicInPersonalWebsite"
                loading="lazy"
              />
            </div>
            <div className="data">
              <div className="BioData">
              <p>
               <span>Hartaj Singh</span> ,<span>Founder</span> of<a target="_blank" href="https://www.linkedin.com/company/elit-dynamon"> Elit Dyanmon</a> and a <span> Programmer </span>
                ,So over the last one and half year, I've invested my time my most of time in what keeps me up at night from Graphic Desgining  to <span>programming</span> to finance and to <span>Entrepreneurship</span> ,I've got my hands 
                dirty in diverse skills.Worked with tons of projects with different <span>web technologies</span>(all available at <a target="_blank" href="https://github.com/Hartaj-singh-dev">GitHub</a>) and some of them are mentioned below.
                and at the end this process of never stop learning will be on loop for lifetime.
              </p>
               </div>
              <div className="dataCards">
                <div className="card">
                  <div className="cardHead">
                    <h2>Skills</h2>
                  </div>
                  <div className="cardsubHeader">
                  
                    <div>Skills</div> 
                  </div>
                  <div className="cardDetails" >
                    <div className="skills">
                      <div  className="skillReact">
                        <i className="fab fa-react fa-lg" style={{ color: "#0c73d3" }}></i>
                        --React
                      </div>
                      <div className="skillHTML" >
                        <i
                          className="fab fa-html5 fa-lg"
                          style={{ color: "#f75312" }}
                        ></i>
                        --HTML
                      </div>
                      <div  className="skillCSS">
                        <i
                          className="fab fa-css3-alt fa-lg"
                          style={{ color: "blue" }}
                        ></i>
                        --CSS
                      </div>
                      <div  className="skillJS" >
                        <i
                          className="fab fa-js fa-lg"
                          style={{ color: "#ffdb0f" }}
                        ></i>
                        --javascript
                      </div>
                      <div className="skillNode">
                     
                        <i
                          className="fab fa-node-js fa-lg"
                          style={{ color: "green" }}
                        ></i>
                        --node js
                      </div>
                      <div className="skillNexjs">
                        --Next.js
                      </div>
                      <div className="skillDatabse">
                       
                        <i
                          className="fas fa-database fa-lg"
                          style={{ color: "green" }}
                        ></i>
                        --mongoDb
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="cardHead">
                    <h2>Education</h2>
                  </div>
                  <div className="cardDetailsOfEducation">
                    <div className="subHeadFullData">
                     
                      <i className="fas fa-school"></i> <h1 className="education">Formal Education </h1>
                      <div  className="tradiontnal">
                      {/* <div className="education" >
                     
                        <span style={{ color: "green" }}>Passed</span> - 10th
                        class CICSE
                      </div>
                      <div className="education">
                      
                        <span style={{ color: "red" }}>Currently</span> -
                        (PCM) 11th class ISC
                      </div> */}
                      <div className="education">
                        <span>It acctualy doesn't matter</span>
                      </div>
                    </div>
                    </div>
                   
                    <div
                      className="subHeadFullData"
                      style={{ textAlign: "center", fontFamily: "Roboto" }}
                    >
                    <h1 className="education">  Self Taught Education </h1>

                      <div
                      className="SelfEducation" >
                      <div className="education" style={{ marginTop: "5px" }}>
                        Entrepreneurship
                      </div>
                      <div className="education">Finance</div>
                      <div className="education">Business Management</div>
                      <div className="education">Leadership</div>
                      <div className="education">Programming</div>
                    </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ContactArrow">
            <Link to="contact" spy={true} smooth={true} duration={50}>
              <IconButton>
                <ArrowDownwardIcon fontSize="large"></ArrowDownwardIcon>
              </IconButton>
            </Link>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default About;
