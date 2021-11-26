import React from 'react'
import "./Education.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faHtml5,faCss3,faBootstrap,faJsSquare,faReact} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons"
import Clogo from "../components/images/c-logo.png";
import psicon from "../components/images/ps.png";
import xdicon from "../components/images/xd.png";


function Education() {
    return (
        <div id="education">
            <div className="education ">
                <div className="background">
                    <h1 className="text-center">education</h1>
                    <div className="container ">
                        <p className="paragraphEducation">
                        In 2012 I completed my G.C.E Ordinary level examination and 2016 I completed my advance level examination in commerce stream (accounting –A business studies-B economics-B) at Sri Dharmaloka college Kelaniya. Then I selected to enter Rajarata University of Sir Lanka for B.Sc. In information communication technology degree. While completing my B.Sc. in Information communication technology Degree at Rajarata University I learned and practice so many areas of computer science. In addition, I studied many programing languages and some frameworks.
                        </p>

                        <div className="portfolio">
                            <h2 className="portfilio-heading ">Portfilio</h2>
                            <a href="https://heshanfdo1.wixsite.com/portfilio" target="blank" ><button className="btn btn-danger btnportfolio">find my portfolio and details here</button></a> 
                        </div>

                        <div className="skills">
                            <h2 className="skills-heading" >skills</h2>
                            <ul>
                                <li>Team player (Represented Gampa district hockey Team, School Team, and university Team .colours awarded player. )
                                </li>
                                <li>Leadership skills (Captain of Sri Dharmaloka college Hockey Team and Vice-captain of Rajarata university Hockey Team) </li>
                                <li>
                                quick learning and mastering new technologies, successful working in both team and self-directed settings
                                </li>
                                <li>Ability to take a logical and analytical approach in solving problems and solving issues</li>
                            </ul>

                            <div className="professional">
                            <h2 className="skills-heading">professional skills</h2>
                            <div className="professional-iteams">
                                <span><FontAwesomeIcon icon={faHtml5} className="html fa-2x"/>  HTML5</span>
                                <span><FontAwesomeIcon icon={faCss3}  className="css fa-2x"/>CSS3</span>
                                <span><FontAwesomeIcon icon={faBootstrap} className="bootstrap fa-2x"/>Bootstrap</span>
                                <span><FontAwesomeIcon icon={faJsSquare} className="js fa-2x"/>Javascript</span>
                                <span><FontAwesomeIcon icon={faReact} className="react fa-2x"/>React.js</span>
                                <span><FontAwesomeIcon icon={faCopyright} className="cprogrm fa-2x" />C programing</span>
                                <span><img className="logo" src={Clogo} alt="" /> C++</span>
                                
                            </div>
                            <div className="profestional-other">
                                    <p><img className="logo" src={psicon} alt="phtoshop icon.." /> Adobe Photoshop</p>
                                    <p><img className="logo" src={xdicon} alt="xdicon" /> Adobe Xd</p>
                                </div>
                        </div>
                        
                     </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Education
