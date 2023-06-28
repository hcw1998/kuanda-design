import logo from "../images/logo.png"

export default function About() {
    return (
        <div className="row mb-3">
            <div className="col-md-4">
                <img src={logo} className="img-fluid" alt="logo" ></img>
            </div>
            <div className="col-md-6">
                <div className="about-space" />
                <span className="about-text">
                    <br /><br />
                    H-C-D&建築空間裝飾設計的指標與方向~<br />
                    老宅、新屋首重安全是根本基礎條件、隨即理想居家為遵循向健康環保、不帶累贅表象加至其上、達極緻舒適簡約面貌原則~<br />
                    <br />
                    先&emsp;隔局機能、動線架構完成、<br />
                    再&emsp;空間整體畫面、主題上彩、<br />
                    然&emsp;裝置傢飾、質感鋪陳點睛、<br />
                    <br />
                    整體沁心自在感、油然而生！<br />
                    將建築安全、設計環境、健康裝置藝術搭配恰到好處、<br />
                    如雲~連山和海一直爽朗無與倫比！
                </span>
                <div style={{ height: "50px" }} />
                <span style={{ fontSize: "21px", fontWeight: "bold" }}>
                    黃紀達<br />
                    Gordon Huang<br />
                </span>
                {/* <div style={{ height: "30px" }} />
                <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                    國立台灣藝術大學<br />
                    national taiwan university of arts<br />
                </span> */}
            </div>
        </div>
    )
}
// export default function About() {
//     return (
//         <>
//             <div className="about-space" />
//             <div class="about-logo">
//                 <img src={logo} alt='logo' />
//             </div>
//             <div class="about-content">
//                 <div className="about-space" />
//                 <span className="about-text">
//                     我們從不同的面向與角度去探索、感受空間，發掘每個空間的特性，<br />
//                     將人的感性與空間本質、理性結合，將使用者的需求與空間美學並重，<br />
//                     創造出宜人且有溫度的舒適空間。<br />
//                 </span>
//                 <div style={{ height: "50px" }} />
//                 <span style={{ fontSize: "21px", fontWeight: "bold" }}>
//                     黃紀達<br />
//                     Chi Da, Huang<br />
//                 </span>
//                 <div style={{height: "30px"}}/>
//                 <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
//                     國立台灣藝術大學<br />
//                     national taiwan university of arts<br />
//                 </span>
//             </div>
//         </>)
// }