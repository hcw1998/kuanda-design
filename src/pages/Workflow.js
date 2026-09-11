// 步驟內容直接呈現，不收在 accordion 裡 ——
// 報價區間是潛在客戶最想知道的資訊，不該需要點兩下才看得到。
const steps = [
    {
        title: '初步諮詢＆收費方式概估',
        body: '了解業主設計風格需求、喜好、現況、預算，告知收費方式與提案費等等。',
        note: {
            title: '概估預算',
            lines: [
                '新房每坪 4~7 萬',
                '舊房每坪 7~10 萬',
                '可依不同預算編列「專案預算」',
            ],
            footnote: '以上概估不含家具、電器及設備。',
        },
    },
    {
        title: '現場丈量',
        body: '與業主端至現場丈量、拍照存檔，作為設計參考依據。',
    },
    {
        title: '平面規劃設計提案',
        body: '針對業主需求，提出平面設計與空間規劃提案。',
    },
    {
        title: '工程報價',
        body: '依照設計圖面定案後，提供業主整體工程報價。',
    },
    {
        title: '工程進行',
        body: '依照設計圖至現場執行，將工地執行紀錄、照片上傳至 Line 群組，定期線上彙報進度，不定期約業主至現場。',
    },
    {
        title: '完工驗收',
        body: '業主驗收完畢，結案交屋。',
    },
]

export default function Workflow() {
    return (
        <section className="workflow">
            <header className="workflow__head">
                <h1 className="workflow__title">服務流程</h1>
                <p className="workflow__label">THE DETAIL OF OUR SERVICE PROCESS</p>
                <p className="workflow__intro">合作方式與細節規劃流程，共六個階段。</p>
            </header>

            <ol className="workflow__steps">
                {steps.map((step, i) => (
                    <li className="workflow__step" key={step.title}>
                        <div className="workflow__marker" aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}
                        </div>

                        <div className="workflow__content">
                            <h2 className="workflow__step-title">{step.title}</h2>
                            <p className="workflow__body">{step.body}</p>

                            {step.note && (
                                <div className="workflow__note">
                                    <p className="workflow__note-title">{step.note.title}</p>
                                    <ul>
                                        {step.note.lines.map((line) => <li key={line}>{line}</li>)}
                                    </ul>
                                    <p className="workflow__footnote">{step.note.footnote}</p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}
