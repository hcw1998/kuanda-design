import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import image1_5 from '../images/1-5.jpg';
import image1_1 from '../images/1-1.jpg';
import image1_2 from '../images/1-2.jpg';
import image1_3 from '../images/1-3.jpg';
import image1_4 from '../images/1-4.jpg';
import image1_6 from '../images/1-6.jpg';
import image1_7 from '../images/1-7.jpg';
import image1_8 from '../images/1-8.jpg';
import image1_9 from '../images/1-9.jpg';
import image1_10 from '../images/1-10.jpg';
import image2_6 from '../images/2-6.jpg';
import image3_1 from '../images/3-1.jpg';

export default function Residence() {

    const { projectId } = useParams()
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = getImages()

    function getImages() {
        switch (projectId) {
            case '1': return [image1_1, image1_2, image1_3, image1_4, image1_5, image1_6, image1_7, image1_8, image1_9, image1_10]
            case '2': return [image2_6]
            case '3': return [image3_1]
            default: return []
        }
    }

    function scroll(nextValue) {
        if (currentIndex + nextValue === images.length) {
            setCurrentIndex(currentIndex => 0)
        } else if (currentIndex + nextValue < 0) {
            setCurrentIndex(currentIndex => images.length - 1)
        } else {
            setCurrentIndex(currentIndex => currentIndex + nextValue)
        }
    }

    return (
        <>
            <div className='position-relative w-100 bg-dark' style={{ height: '75vh' }}>
                <button className="btn position-absolute top-50" style={{ left: '1rem' }} onClick={() => scroll(-1)}>
                    <span className="carousel-control-prev-icon"/>
                </button>
                <button className="btn position-absolute top-50" style={{ right: '1rem' }} onClick={() => scroll(1)}>
                    <span className="carousel-control-next-icon"/>
                </button>
                <img className="w-100 h-100" alt="..." src={images[currentIndex]} style={{ objectFit: 'contain' }}/>
            </div>
            <div className='flex-row justify-content-center mt-3 scrollX'>
                {images.map((image, index) => {
                    return (
                        <div className={`me-3 ${currentIndex === index ? 'border border-3 border-dark' : 'border border-3'}`} style={{ width: 90, height: 90, cursor: 'pointer', flexShrink: 0 }} onClick={() => setCurrentIndex(currentIndex => index)}>
                            <img className="w-100 h-100" alt="..." src={image}/>
                        </div>
                    )
                })}
            </div>
        </>
        // <div id="carouselExampleDark" className="carousel carousel-dark slide">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>

        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active" data-bs-interval="10000">
        //             <img src={image1_1} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item" data-bs-interval="2000">
        //             <img src={image1_2} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_3} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_4} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_5} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_6} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_7} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_8} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_9} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={image1_10} className="d-block w-100" alt="..."/>
        //                 <div className="carousel-caption d-none d-md-block">
        //                 </div>
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
    )
}