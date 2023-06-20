import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons';
import designer from '../images/designer.jpeg';

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
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
            <Form />
            <div className="row">
                <div className="col-md-6 col-lg-4 pb-3">
                    <div className="card" >
                        <img src={designer} className="card-img-top" alt="..." />
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
                        <img src={designer} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">藍姿寬</h5>
                            <h6 className="card-subtitle mb-2 text-muted">藝術總監</h6>
                            <h6 className="card-text">信箱 : gordon199968@gmail.com</h6>
                            <h6 className="card-text">手機 : 0918734556</h6>
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
                        <img src={designer} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Steve</h5>
                            <h6 className="card-subtitle mb-2 text-muted">設計師</h6>
                            <h6 className="card-text">信箱 : gordon199968@gmail.com</h6>
                            <h6 className="card-text">手機 : 0918734556</h6>
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