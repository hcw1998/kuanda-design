import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons';
import designer from '../images/designer.jpeg';


export default function Contact() {
    return (
        <>
            {/* <form>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">name</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3"></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">phone</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">email</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                                <label class="form-check-label" for="gridCheck1">
                                    提交
                                </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form> */}
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