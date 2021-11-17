import React from 'react'
import Hockey from "../components/images/Hockey.jpg";
import Cricket from "../components/images/cricket.jpg";
import games from "../components/images/computer games.jpg";
import Movies from "../components/images/movies.jpg";
import "./Hobbies.css"

function Hobbies() {
    return (
        <div>
            <div className="hobbies">
                <div className="hibbiesHeader">
                    <h2 className="heading">my hobbies</h2>
                </div>
                <div className="carasol">
                    <div className="container">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                        </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Hockey} className="d-block w-100 images" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5 className="carouselText">playing hockey</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Cricket} className="d-block w-100 images" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5 className="carouselText">playing cricket</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={games} className="d-block w-100 images" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5 className="carouselText">playing computer games</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Movies} className="d-block w-100 images" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5 className="carouselText">watching movies</h5>
                            </div>
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
           
                </div>
            </div>
           
       </div>
    )
}

export default Hobbies
