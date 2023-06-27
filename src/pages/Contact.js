import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons';
import staff1 from '../images/staff1.png';
import staff2 from '../images/staff2.jpg';
import staff3 from '../images/staff3.jpg';


function Form() {
    return (
        <form className='col-lg-6 col-xxl-4 offset-lg-3 offset-xxl-4 py-5'>
            <div class="row mb-4">
                <div className='col-lg-6'>
                    <label className="form-label">Name</label>
                    <input className="form-control"></input>
                </div>
                <div className='col-lg-6'>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"></input>
                </div>
            </div>
            <div className='mb-4'>
                <label className="form-label">Select</label>
                <select className="form-select">
                    <option>住宅空間</option>
                    <option>商業空間</option>
                    <option>一般諮詢</option>
                    {/* <option>4</option>
                    <option>5</option> */}
                </select>
            </div>
            <div className='mb-4'>
                <label className="form-label">Message</label>
                <textarea className="form-control" rows='6'/>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
    )
}

export default function Contact() {
    return (
        <>
            {/* <Form /> */}
            <div className="row">
                <div className="col-md-6 col-lg-4 pb-3">
                    <div className="card" >
                        <img src={staff1} className="card-img-top" alt="..." style={{height:"320px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">黃紀達</h5>
                            <h6 className="card-subtitle mb-2 text-muted">藝術總監</h6>
                            <h6 className="card-text">信箱 : gordon199968@gmail.com</h6>
                            <h6 className="card-text">手機 : 0918199968</h6>
                            <div className="d-flex justify-content-start">
                                <a href='https://www.facebook.com/zhao.xun.58'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' border style={{ color: "#0056eb", }} />
                                </a>
                                <a href='https://line.me/ti/p/jyPwDDxEqJ'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLine} size='2x' border style={{ color: "#15d118", }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pb-3">
                    <div className="card">
                        <img src={staff2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">藍姿寬</h5>
                            <h6 className="card-subtitle mb-2 text-muted">藝術創意顧問</h6>
                            <h6 className="card-text">寬達創意設計董事長</h6>
                            <h6 className="card-text">台灣藝術大學前副校長</h6>
                            <div className="d-flex justify-content-start">
                                <a href='https://www.facebook.com/zhao.xun.58'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' border style={{ color: "#0056eb", }} />
                                </a>
                                <a href='https://line.me/ti/p/jyPwDDxEqJ'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLine} size='2x' border style={{ color: "#15d118", }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pb-3">
                    <div className="card">
                        <img src={staff3} className="card-img-top" alt="..." style={{height:"320px"}} />
                        <div className="card-body">
                            <h5 className="card-title">許兆慶</h5>
                            <h6 className="card-subtitle mb-2 text-muted">法律顧問</h6>
                            <h6 className="card-text">眾博法律事務所所長</h6>
                            {/* <h6 className="card-text">手機 : 0918734556</h6> */}
                            <div className="d-flex justify-content-start">
                                <a href='https://www.facebook.com/zhao.xun.58'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' border style={{ color: "#0056eb", }} />
                                </a>
                                <a href='https://line.me/ti/p/jyPwDDxEqJ'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLine} size='2x' border style={{ color: "#15d118", }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}