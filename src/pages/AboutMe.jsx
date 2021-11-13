import React from 'react'
import "./AboutMe.css";
import my from "../components/images/myimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

function AboutMe() {
    return (
        <div>
            <div className="about">
                <div className="a-right">
                    <div className="image-box">
                            <img className="image" src={my} alt="my image.." />
                    </div>
                    <div className="discription">
                        <p>Undergraduate in BSc IT at the Rajarata University of Sri Lanka. I have
                            focused on programming, web development to gain a better
                            knowledge of those fields.I am eagerly willing to accept and learn the new concepts in my field of working. I am able to cope with different kind of people with good team spirit.I believe that I can hold any responsibility and be a good value addition to your organization. Winner of school and university colors back to back years in Hockey.and also did many sports like rugby, cricket,carrom,ellaand athletics also.
                            Team leader, team management, and Team-working and
                            communication skills I developed from being a sportsman</p>
                    </div>
                </div>

                <div className="a-left">
                    <div className="details">
                        <p><span className="details-title">name :</span> <span className="detailsIteam">palamandalige heshan duminda fernando</span> </p>
                        <p><span className="details-title">adress :</span> <span className="detailsIteam">no 32/10 church road, eldaniya,kadawatha</span> </p>
                        <p><span className="details-title">contact :</span> <span className="detailsIteam">0714377030/0112971323</span> </p>
                        <p><span className="details-title">Email :</span> <span className="detailsIteam">heshanfer96@gmail.com</span> </p>
                        <p><span className="details-title">NIC :</span> <span className="detailsIteam">961992842v</span> </p>
                        <p><span className="details-title">gender :</span> <span className="detailsIteam">mail</span> </p>
                        <p><span className="details-title">civil status :</span> <span className="detailsIteam">single</span> </p>
                        <p><span className="details-title">nationalty :</span> <span className="detailsIteam">sri lankan</span> </p>
                        <p><span className="details-title">school :</span> <span className="detailsIteam">sri dharmaloka collrge kelaniya</span> </p>

                    </div>
                    
                </div>
                     </div>
                        <div className="icons">
                        <a className="position" href="https://www.facebook.com/heshan.fdo.31"><FontAwesomeIcon icon={faFacebook} className=" fa-5x"/></a>
                        <a className="position" href="#"><FontAwesomeIcon icon={faInstagram} className=" fa-5x"/></a>
                        <a className="iconposition" href="http://www.linkedin.com/in/heshanfer"><FontAwesomeIcon icon={faLinkedin} className=" fa-5x"/></a>
                        <a  className="iconposition" href="https://github.com/Heshanfer96"><FontAwesomeIcon icon={faGithub} className=" fa-5x"/></a>
                    </div>
        </div>
    )
}

export default AboutMe
