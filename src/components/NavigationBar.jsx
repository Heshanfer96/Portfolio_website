import React from 'react'
import "../App.css"
import logo from "./images/logo.jpg"

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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">about me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">contact me</a>
                    </li>
                </ul>
                </div>
            </div>
            
           
            </nav>
        </div>
    )
}

export default NavigationBar;
