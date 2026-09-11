import portrait from "../images/staff1.png"

export default function About() {
    return (
        <div className="row about g-4 g-lg-5">
            <div className="col-md-5 col-lg-4">
                <figure className="about__portrait">
                    <img src={portrait} alt="設計總監 黃紀達" />
                </figure>
            </div>

            <div className="col-md-7 col-lg-8">
                <div className="about__body">
                    <p>H-C-D&amp;建築空間裝飾設計的指標與方向~</p>

                    <p>老宅、新屋首重安全是根本基礎條件、隨即理想居家為遵循向健康環保、不帶累贅表象加至其上、達極緻舒適簡約面貌原則~</p>

                    <ol className="about__steps">
                        <li><span>先</span>隔局機能、動線架構完成、</li>
                        <li><span>再</span>空間整體畫面、主題上彩、</li>
                        <li><span>然</span>裝置傢飾、質感鋪陳點睛、</li>
                    </ol>

                    <p>整體沁心自在感、油然而生！將建築安全、設計環境、健康裝置藝術搭配恰到好處、如雲~連山和海一直爽朗無與倫比！</p>

                    <div className="about__sign">
                        <p className="about__name">黃紀達<span>Gordon Huang</span></p>
                        <p className="about__role">設計總監</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
