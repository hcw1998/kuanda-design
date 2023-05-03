import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons';
import designer from '../images/designer.jpeg';


export default function Contact() {
    return (
        <>
            <form>
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
            </form>
            {/* <div className='row'>
                <div className="col">
                    <div className='bg-secondary text-light py-4 px-3 rounded mb-3'>
                        <div className='text-center text-sm'>室內裝修  / 商辦空間 /  藝術買賣 /  其他事項</div>
                        <div className='text-center text-sm mt-3'>歡迎聯繫我們
                            <a className="btn btn-primary" style={{ "background-color": "#4267B2" }} href="https://www.facebook.com/ExpoFoo-102303228745477" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>facebook</a>
                        </div>
                    </div>
                </div>
            </div> */}
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
                            <h5 className="card-title">林容安</h5>
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