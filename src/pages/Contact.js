import React from 'react';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons';
import staff1 from '../images/staff1.png';
import staff2 from '../images/staff2.jpg';
import staff3 from '../images/staff3.jpg';

const ENDPOINT = "https://urqlj4je32.execute-api.us-east-1.amazonaws.com/prod/";

// 後端 Lambda 依這些欄位名稱解析，包含拼錯的 lindId —— 不要改名。
const EMPTY_FORM = {
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
}

function Form() {
    const [formData, setFormData] = useState(EMPTY_FORM)
    const [status, setStatus] = useState({ state: "idle", message: "" })

    const set = (field) => (e) => setFormData({ ...formData, [field]: e.target.value })

    const handleSubmit = (e) => {
        // 一定要先擋掉原生送出，否則驗證失敗時整頁會重新載入。
        e.preventDefault()

        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
            setStatus({ state: "error", message: "請填寫聯絡人、Email 與電話。" })
            return
        }

        setStatus({ state: "sending", message: "" })

        fetch(ENDPOINT, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json", "Accept": "*/*" },
        })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                setStatus({ state: "sent", message: "已收到您的需求，我們會盡快與您聯繫。" })
                setFormData(EMPTY_FORM)
            })
            .catch(() => {
                setStatus({
                    state: "error",
                    message: "送出失敗，請稍後再試，或直接來電 0918199968。"
                })
            })
    }

    return (
        <form className="enquiry" onSubmit={handleSubmit} noValidate>
            <header className="enquiry__head">
                <h1 className="enquiry__title">聯絡我們</h1>
                <p className="enquiry__intro">
                    留下您的需求，我們會盡快與您聯繫。標示 (必填) 的欄位請務必填寫。
                </p>
            </header>

            <fieldset className="enquiry__group">
                <legend className="enquiry__legend">怎麼聯絡您</legend>
                <div className="enquiry__grid">
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-name">聯絡人 (必填)</label>
                        <input id="f-name" className="form-control" autoComplete="name"
                            value={formData.name} onChange={set("name")} />
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-gender">稱謂</label>
                        <select id="f-gender" className="form-select"
                            value={formData.gender} onChange={set("gender")}>
                            <option value="">請選擇</option>
                            <option value="先生">先生</option>
                            <option value="小姐">小姐</option>
                            <option value="不方便透露">不方便透露</option>
                        </select>
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-email">Email (必填)</label>
                        <input id="f-email" type="email" className="form-control" autoComplete="email"
                            value={formData.email} onChange={set("email")} />
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-phone">電話 (必填)</label>
                        <input id="f-phone" type="tel" className="form-control" autoComplete="tel"
                            value={formData.phone} onChange={set("phone")} />
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-line">Line ID</label>
                        <input id="f-line" className="form-control"
                            value={formData.lindId} onChange={set("lindId")} />
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-address">地址</label>
                        <input id="f-address" className="form-control" autoComplete="street-address"
                            value={formData.address} onChange={set("address")} />
                    </div>
                </div>
            </fieldset>

            <fieldset className="enquiry__group">
                <legend className="enquiry__legend">案件資訊</legend>
                <div className="enquiry__grid">
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-type">空間類別</label>
                        <select id="f-type" className="form-select" value={formData.type} onChange={set("type")}>
                            <option>住宅空間</option>
                            <option>商辦空間</option>
                            <option>舊屋翻修</option>
                            <option>預售屋</option>
                        </select>
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-budget">自訂預算</label>
                        <select id="f-budget" className="form-select" value={formData.budget} onChange={set("budget")}>
                            <option>100萬以下</option>
                            <option>100-150萬</option>
                            <option>150-200萬</option>
                            <option>200-250萬</option>
                            <option>250-300萬</option>
                            <option>300-500萬</option>
                            <option>500-1000萬</option>
                        </select>
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-layout">室內格局</label>
                        <select id="f-layout" className="form-select" value={formData.layout} onChange={set("layout")}>
                            <option>20坪以下</option>
                            <option>30-40坪</option>
                            <option>40-50坪</option>
                            <option>50-60坪</option>
                            <option>60-100坪</option>
                        </select>
                    </div>
                    <div className="enquiry__field">
                        <label className="form-label" htmlFor="f-toilet">衛數</label>
                        <select id="f-toilet" className="form-select" value={formData.toiletNum} onChange={set("toiletNum")}>
                            <option>1衛</option>
                            <option>2衛</option>
                            <option>3衛</option>
                            <option>4衛</option>
                            <option>4衛以上</option>
                        </select>
                    </div>
                </div>
            </fieldset>

            <fieldset className="enquiry__group">
                <legend className="enquiry__legend">需求說明</legend>
                <div className="enquiry__field">
                    <label className="form-label" htmlFor="f-message">訊息 Message</label>
                    <textarea id="f-message" className="form-control" rows="6"
                        placeholder="例如：三房兩廳，希望以溫潤木質為主，預計今年底前完工。"
                        value={formData.message} onChange={set("message")} />
                </div>
            </fieldset>

            <div className="enquiry__actions">
                <button type="submit" className="btn btn-primary" disabled={status.state === "sending"}>
                    {status.state === "sending" ? "傳送中…" : "送出需求"}
                </button>

                {status.message && (
                    <p className={`enquiry__status enquiry__status--${status.state}`} role="status">
                        {status.message}
                    </p>
                )}
            </div>
        </form>
    )
}

const team = [
    {
        photo: staff1,
        name: '黃紀達',
        role: '設計總監',
        credentials: [
            'H-C-D 建築空間裝飾設計總監',
            '國立台灣藝術大學工藝設計研究所 M.F.A.',
        ],
        contact: [
            { label: '信箱', value: 'gordon199968@gmail.com' },
            { label: '手機', value: '0918199968' },
        ],
        links: [
            { icon: faFacebook, href: 'https://www.facebook.com/profile.php?id=100054372513546', label: 'Facebook' },
            { icon: faLine, href: 'https://line.me/ti/p/JXvJ6vRlGq', label: 'LINE' },
        ],
    },
    {
        photo: staff2,
        name: '藍姿寬',
        role: '藝術創意顧問',
        credentials: [
            '耀儀貿易有限公司董事長',
            '寬達創意設計董事長',
            '台灣藝術大學前副校長',
        ],
        contact: [],
        links: [],
    },
    {
        photo: staff3,
        name: '許兆慶',
        role: '法律顧問',
        credentials: [
            '眾博法律事務所所長',
        ],
        contact: [],
        links: [],
    },
]

export default function Contact() {
    return (
        <>
            <Form />

            <section className="team">
                <h2 className="team__title">團隊</h2>
                <p className="team__label">OUR TEAM</p>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                    {team.map((member) => (
                        <div className="col" key={member.name}>
                            <article className="member">
                                <div className="member__photo">
                                    <img src={member.photo} alt={`${member.name}／${member.role}`} loading="lazy" />
                                </div>
                                <div className="member__body">
                                    <h3 className="member__name">{member.name}</h3>
                                    <p className="member__role">{member.role}</p>

                                    <ul className="member__credentials">
                                        {member.credentials.map((line) => <li key={line}>{line}</li>)}
                                    </ul>

                                    {member.contact.length > 0 && (
                                        <dl className="member__contact">
                                            {member.contact.map((row) => (
                                                <div key={row.label}>
                                                    <dt>{row.label}</dt>
                                                    <dd>{row.value}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    )}

                                    {member.links.length > 0 && (
                                        <div className="member__links">
                                            {member.links.map((link) => (
                                                <a key={link.label} href={link.href} target="_blank"
                                                    rel="noreferrer" aria-label={`${member.name} 的 ${link.label}`}>
                                                    <FontAwesomeIcon icon={link.icon} />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
