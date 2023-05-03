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
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            1.初步諮詢
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            了解業主設計需求、喜好、現況、預算與告知收費方式與提案費等等。<br /><br />
                            <strong>收費方式</strong> <br />
                            提案費用:<br />
                            40坪以下____NT:15,000<br />
                            40坪以上____另行報價<br />
                            費用需於丈量提案前支付，提案後確認合作時，全額費用可折抵設計費。
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
                            與業主端至現場丈量、拍照存檔，作為設計依據。
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            3.平面提案
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            針對業主需求後，提出平面設計與空間規劃提案。
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
                            依造設計圖面後，進行提供業主整體工程報價。
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
                            至現場時將工地照片上傳至 LINE 群組，不定期約業主至現場。
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
                            驗主驗收完畢，結案交屋。
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}