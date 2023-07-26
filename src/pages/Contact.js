import React from 'react';
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons';
import staff1 from '../images/staff1.png';
import staff2 from '../images/staff2.jpg';
import staff3 from '../images/staff3.jpg';

function Form() {
    // const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
        lindId: "",
        address: "",
        type: "住宅空間",
        budget: "100萬以下",
        layout: "20坪以下",
        toiletNum: "1衛",
        message: ""
    })
    const handleSubmit = (e) => {
        if(formData.name === "" || formData.email === "" || formData.phone === "") {
            alert('請填寫所有必填項目')
            return;
        }
        fetch("https://urqlj4je32.execute-api.us-east-1.amazonaws.com/prod/", {
            method: "POST", // or 'PUT'
            body: JSON.stringify(formData), // data can be `string` or {object}!
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
        }).then(console.log(JSON.stringify(formData))).catch((error) => { console.log(error) })
        alert('您已成功送出')
        // dispatch({type: 'ALERT_SUCCESS'.SUCCESS, message: '成功'})
        e.preventDefault()
        console.log(formData)
        setFormData({
            name: "",
            gender: "",
            email: "",
            phone: "",
            lindId: "",
            address: "",
            type: "住宅空間",
            budget: "100萬以下",
            layout: "20坪以下",
            toiletNum: "1衛",
            message: ""
        })

    }
    // const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    // const appendAlert = (message, type) => {
    //     const wrapper = document.createElement('div')
    //     wrapper.innerHTML = [
    //         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    //         `   <div>${message}</div>`,
    //         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    //         '</div>'
    //     ].join('')
    //     console.log('shit1')
    //     alertPlaceholder.append(wrapper)
    // }

    // const alertTrigger = document.getElementById('liveAlertBtn')
    // console.log(alertTrigger)
    // if (alertTrigger) {
    //     console.log('shit')

    //     alertTrigger.addEventListener('click', () => {
    //         appendAlert('Nice, you triggered this alert message!', 'success')
    //     })
    // }
    return (
        <>
            {/* <div id="liveAlertPlaceholder"></div> */}
            <form className='col-lg-6 col-xxl-4 offset-lg-3 offset-xxl-4 py-5' onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className='col-lg-6'>
                        <label className="form-label">聯絡人 (必填)</label>
                        <input className="form-control" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label className="form-label">性別</label>
                        <input className="form-control" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} value={formData.gender}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label className="form-label">Email (必填)</label>
                        <input type="email" className="form-control" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label className="form-label">電話 (必填)</label>
                        <input className="form-control" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} value={formData.phone}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label className="form-label">Line ID</label>
                        <input className="form-control" onChange={(e) => setFormData({ ...formData, lindId: e.target.value })} value={formData.lindId}></input>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className='col-lg-12'>
                        <label className="form-label">地址</label>
                        <input className="form-control" onChange={(e) => setFormData({ ...formData, address: e.target.value })} value={formData.address}></input>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className="form-label">空間類別</label>
                    <select className="form-select" onChange={(e) => setFormData({ ...formData, type: e.target.value })} value={formData.type}>
                        <option>住宅空間</option>
                        <option>商辦空間</option>
                        <option>舊屋翻修</option>
                        <option>預售屋</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="form-label">自訂預算</label>
                    <select className="form-select" onChange={(e) => setFormData({ ...formData, budget: e.target.value })} value={formData.budget}>
                        <option>100萬以下</option>
                        <option>100-150萬</option>
                        <option>150-200萬</option>
                        <option>200-250萬</option>
                        <option>250-300萬</option>
                        <option>300-500萬</option>
                        <option>500-1000萬</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="form-label">室內格局</label>
                    <select className="form-select" onChange={(e) => setFormData({ ...formData, layout: e.target.value })} value={formData.layout}>
                        <option>20坪以下</option>
                        <option>30-40坪</option>
                        <option>40-50坪</option>
                        <option>50-60坪</option>
                        <option>60-100坪</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="form-label">衛數</label>
                    <select className="form-select" onChange={(e) => setFormData({ ...formData, toiletNum: e.target.value })} value={formData.toiletNum}>
                        <option>1衛</option>
                        <option>2衛</option>
                        <option>3衛</option>
                        <option>4衛</option>
                        <option>4衛以上</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="form-label">訊息 Message</label>
                    <textarea className="form-control" rows='6' onChange={(e) => setFormData({ ...formData, message: e.target.value })} value={formData.message} />
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    <button type="submit" className="btn btn-primary" id="liveAlertBtn">Send</button>
                </div>
            </form>
        </>
    )
}

export default function Contact() {
    return (
        <>
            {<Form />}
            <div className="row">
                <div className="col-md-6 col-lg-4 pb-3">
                    <div className="card" >
                        <img src={staff1} className="card-img-top" alt="..." style={{ height: "320px" }} />
                        <div className="card-body">
                            <h5 className="card-title">黃紀達</h5>
                            <h6 className="card-subtitle mb-2 text-muted">設計總監</h6>
                            <h6 className="card-text">H-C-D建築空間裝飾設計總監</h6>
                            <h6 className="card-text">國立台灣藝術大學工藝設計研究所 M.F.A.</h6>
                            <h6 className="card-text">信箱 : gordon199968@gmail.com</h6>
                            <h6 className="card-text">手機 : 0918199968</h6>
                            <div className="d-flex justify-content-start">
                                <a href='https://www.facebook.com/profile.php?id=100054372513546'
                                    target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' border style={{ color: "#0056eb", }} />
                                </a>
                                <a href='https://line.me/ti/p/JXvJ6vRlGq'
                                    target="_blank" rel="noreferrer">
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
                            <h6 className="card-text">耀儀貿易有限公司董事長</h6>
                            <h6 className="card-text">寬達創意設計董事長</h6>
                            <h6 className="card-text">台灣藝術大學前副校長</h6>
                            {/* <div className="d-flex justify-content-start">
                                <a href='https://www.facebook.com/zhao.xun.58'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' border style={{ color: "#0056eb", }} />
                                </a>
                                <a href='https://line.me/ti/p/jyPwDDxEqJ'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLine} size='2x' border style={{ color: "#15d118", }} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pb-3">
                    <div className="card">
                        <img src={staff3} className="card-img-top" alt="..." style={{ height: "320px" }} />
                        <div className="card-body">
                            <h5 className="card-title">許兆慶</h5>
                            <h6 className="card-subtitle mb-2 text-muted">法律顧問</h6>
                            <h6 className="card-text">眾博法律事務所所長</h6>
                            {/* <h6 className="card-text">手機 : 0918734556</h6> */}
                            {/* <div className="d-flex justify-content-start">
                                <a href='https://www.facebook.com/zhao.xun.58'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' border style={{ color: "#0056eb", }} />
                                </a>
                                <a href='https://line.me/ti/p/jyPwDDxEqJ'
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLine} size='2x' border style={{ color: "#15d118", }} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}