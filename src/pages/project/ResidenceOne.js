import React from 'react'
import image1_5 from '../../images/1-5.jpg';
import image1_1 from '../../images/1-1.jpg';
import image1_2 from '../../images/1-2.jpg';
import image1_3 from '../../images/1-3.jpg';
import image1_4 from '../../images/1-4.jpg';
import image1_6 from '../../images/1-6.jpg';
import image1_7 from '../../images/1-7.jpg';
import image1_8 from '../../images/1-8.jpg';
import image1_9 from '../../images/1-9.jpg';
import image1_10 from '../../images/1-10.jpg';




export default function RestidenceOne() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={image1_1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={image1_2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_4} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_5} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_6} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_7} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_8} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_9} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1_10} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}