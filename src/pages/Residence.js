import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

// import image1_5 from '../images/1-5.jpg';
// import image1_1 from '../images/1-1.jpg';
// import image1_2 from '../images/1-2.jpg';
// import image1_3 from '../images/1-3.jpg';
// import image1_4 from '../images/1-4.jpg';
// import image1_6 from '../images/1-6.jpg';
// import image1_7 from '../images/1-7.jpg';
// import image1_8 from '../images/1-8.jpg';
// import image1_9 from '../images/1-9.jpg';
// import image1_10 from '../images/1-10.jpg';
// import `${awsurl}2-6 from '../images/2-6.jpg';
// import `${awsurl}2-2 from '../images/2-2.jpg';
// import `${awsurl}2-3 from '../images/2-3.jpg';
// import `${awsurl}2-4 from '../images/2-4.jpg';
// import `${awsurl}2-5 from '../images/2-5.jpg';
// import `${awsurl}2-7 from '../images/2-7.jpg';
// import `${awsurl}2-10 from '../images/2-10.jpg';
// import `${awsurl}2-17 from '../images/2-17.jpg';
// import `${awsurl}2-21 from '../images/2-21.jpg';
// import `${awsurl}2-23 from '../images/2-23.jpg';
// import `${awsurl}2-24 from '../images/2-24.jpg';
// import `${awsurl}3-1.jpg` from '../images/3-1.jpg';
// import `${awsurl}3-2.jpg` from '../images/3-2.jpg';
// import `${awsurl}3-3.jpg` from '../images/3-3.jpg';
// import `${awsurl}3-4.jpg` from '../images/3-4.jpg';
// import `${awsurl}3-5.jpg` from '../images/3-5.jpg';
// import `${awsurl}3-6.jpg` from '../images/3-6.jpg';
// import `${awsurl}4-1.jpg` from '../images/4-1.jpg';
// import `${awsurl}4-2.jpg` from '../images/4-2.jpg';
// import `${awsurl}4-3.jpg` from '../images/4-3.jpg';
// import `${awsurl}4-4.jpg` from '../images/4-4.jpg';
// import `${awsurl}4-8.jpg` from '../images/4-8.jpg';
// import `${awsurl}5-1.jpg` from '../images/5-1.jpg';
// import `${awsurl}5-3.jpg` from '../images/5-3.JPG';
// import `${awsurl}5-4.jpg` from '../images/5-4.JPG';
// import `${awsurl}5-5.jpg` from '../images/5-5.JPG';
// import `${awsurl}5-6.jpg` from '../images/5-6.JPG';
// import `${awsurl}8-1.jpg` from '../images/8-1.jpg';
// import `${awsurl}8-2.jpg` from '../images/8-2.jpg';
// import `${awsurl}8-3.jpg` from '../images/8-3.jpg';
// import `${awsurl}8-4.jpg` from '../images/8-4.jpg';
// import `${awsurl}8-5.jpg` from '../images/8-5.jpg';
// import `${awsurl}8-6.jpg` from '../images/8-6.jpg';
// import `${awsurl}8-7.jpg` from '../images/8-7.jpg';


export default function Residence() {

    const { projectId } = useParams()
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = getImages()
    

    function getImages() {
        const awsurl = 'https://kuanda-design.s3.amazonaws.com/'
        switch (projectId) {
            case '1': return [`${awsurl}1-1.jpg`, `${awsurl}1-2.jpg`, `${awsurl}1-3.jpg`, `${awsurl}1-4.jpg`, `${awsurl}1-5.jpg`, `${awsurl}1-6.jpg`, `${awsurl}1-7.jpg`, `${awsurl}1-8.jpg`, `${awsurl}1-9.jpg`, `${awsurl}1-10.jpg`]
            case '2': return [`${awsurl}2-6.jpg`, `${awsurl}2-2.jpg`, `${awsurl}2-3.jpg`, `${awsurl}2-4.jpg`, `${awsurl}2-5.jpg`, `${awsurl}2-7.jpg`, `${awsurl}2-10.jpg`, `${awsurl}2-17.jpg`, `${awsurl}2-21.jpg`, `${awsurl}2-23.jpg`, `${awsurl}2-24.jpg`]
            case '3': return [`${awsurl}3-1.jpg`, `${awsurl}3-2.jpg`, `${awsurl}3-3.jpg`, `${awsurl}3-4.jpg`,`${awsurl}3-5.jpg`, `${awsurl}3-6.jpg`]
            case '4': return [`${awsurl}4-1.jpg`, `${awsurl}4-2.jpg`, `${awsurl}4-3.jpg`, `${awsurl}4-4.jpg`,`${awsurl}4-8.jpg`]
            case '5': return [`${awsurl}5-1.jpg`, `${awsurl}5-3.JPG`, `${awsurl}5-4.JPG`, `${awsurl}5-5.JPG`, `${awsurl}5-6.JPG`]
            case '8': return [`${awsurl}8-1.jpg`, `${awsurl}8-2.jpg`, `${awsurl}8-3.jpg`, `${awsurl}8-4.jpg`,`${awsurl}8-5.jpg`, `${awsurl}8-6.jpg`, `${awsurl}8-7.jpg`]
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