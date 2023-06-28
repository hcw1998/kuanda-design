export default function Workflow() {
    return (
        <>
            <figure>
                <blockquote className="blockquote">
                    <p>服務流程 Workflow</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    合作方式&細節規劃流程 <cite title="Source Title">The Detail Of Our Service Process</cite>
                </figcaption>
            </figure>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            1.初步諮詢＆收費方式概估
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            了解業主設計風格需求、喜好、現況、預算，告知收費方式與提案費等等。<br /><br />
                            <strong>概估預算</strong> <br />
                            新房每坪4~7萬<br />
                            舊房每坪7~10萬<br />
                            可依不同預算編列"專案預算"<br />
                            以上概估不含家具、電器、及設備
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            2.現場丈量
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            與業主端至現場丈量、拍照存檔，作為設計參考依據。
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            3.平面規劃設計提案
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            針對業主需求，提出平面設計與空間規劃提案。
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            4.工程報價
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body">
                            依照設計圖面定案後，提供業主整體工程報價。
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingfive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            5.工程進行
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive">
                        <div className="accordion-body">
                            依照設計圖至現場執行，將工地執行紀錄、照片上傳至Line群組，定期線上彙報進度，不定期約業主至現場。
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingsix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            6.完工驗收
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapsesix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix">
                        <div className="accordion-body">
                            業主驗收完畢，結案交屋。
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}