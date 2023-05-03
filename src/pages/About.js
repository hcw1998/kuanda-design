import "../styles.scss"
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
                    我們從不同的面向與角度去探索、感受空間，發掘每個空間的特性，<br />
                    將人的感性與空間本質、理性結合，將使用者的需求與空間美學並重，<br />
                    創造出宜人且有溫度的舒適空間。<br />
                </span>
                <div style={{ height: "50px" }} />
                <span style={{ fontSize: "21px", fontWeight: "bold" }}>
                    黃紀達<br />
                    Chi Da, Huang<br />
                </span>
                <div style={{ height: "30px" }} />
                <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                    國立台灣藝術大學<br />
                    national taiwan university of arts<br />
                </span>
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