const mithusLogo = "https://kuanda-design.s3.amazonaws.com/mithusLogo.png"
const sakuraLogo = "https://kuanda-design.s3.amazonaws.com/sakuraLogo.png"
const totoLogo = "https://kuanda-design.s3.amazonaws.com/totoLogo.png"

export default function Furniture() {
    return (
        <div className="card-deck">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={mithusLogo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mithus新采</h5>
                            <p class="card-text">日本頂級木作傢俱總代理</p>
                            <a href="https://www.mithus.co/" target="_blank" rel="noreferrer">
                                <button type="button" className="btn btn-primary">查看品牌</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={sakuraLogo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">櫻花廚具</h5>
                            <p class="card-text">美好居家生活的創造者</p>
                            <a href="https://www.sakura.com.tw/" target="_blank" rel="noreferrer">
                                <button type="button" className="btn btn-primary">查看品牌</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={totoLogo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">ToTo</h5>
                            <p class="card-text">日本衛浴領導品牌</p>
                            <a href="https://www.twtoto.com.tw/" target="_blank" rel="noreferrer">
                                <button type="button" className="btn btn-primary">查看品牌</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}