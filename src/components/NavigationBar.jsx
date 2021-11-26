import React from 'react';
import "../App.css";
import logo from "./images/logo.jpg";
import {Link} from "react-scroll";

function NavigationBar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo..." /> heshan fernando</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color:"white"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                    <Link className="navtxt" activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="navtxt" activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        >about me</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="navtxt" activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration= {1000}
                        >education</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="navtxt" activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        >projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="navtxt" activeClass="active"
                            to="hobbies"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration= {1000}
                        >hobbies</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="navtxt" activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        >contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            
           
            </nav>
        </div>
    )
}

export default NavigationBar;
