// S3 上的 Mithus logo 底色是烤進圖裡的 #E6E6E6 灰，跟另外兩個白底 logo 擺在
// 一起會很突兀。這份是把背景提成純白後的版本，改由專案內提供。
import mithusLogo from '../images/mithusLogo.png'

const brands = [
    {
        name: 'Mithus 新采',
        blurb: '日本頂級木作傢俱總代理',
        href: 'https://www.mithus.co/',
        logo: mithusLogo,
    },
    {
        name: '櫻花廚具',
        blurb: '美好居家生活的創造者',
        href: 'https://www.sakura.com.tw/',
        logo: 'https://kuanda-design.s3.amazonaws.com/sakuraLogo.png',
    },
    {
        name: 'TOTO',
        blurb: '日本衛浴領導品牌',
        href: 'https://www.twtoto.com.tw/',
        logo: 'https://kuanda-design.s3.amazonaws.com/totoLogo.png',
    },
]

export default function Furniture() {
    return (
        <section className="brands">
            <header className="brands__head">
                <h1 className="brands__title">材質設備</h1>
                <p className="brands__label">MATERIALS &amp; EQUIPMENT</p>
                <p className="brands__intro">我們長期合作的品牌，材質與設備皆選用具原廠保固的正式代理商品。</p>
            </header>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                {brands.map((brand) => (
                    <div className="col" key={brand.name}>
                        <article className="brand">
                            {/* 三個 logo 原圖底色與比例都不同，統一放進等高的白底容器裡 */}
                            <div className="brand__logo">
                                <img src={brand.logo} alt={brand.name} loading="lazy" />
                            </div>
                            <div className="brand__body">
                                <h2 className="brand__name">{brand.name}</h2>
                                <p className="brand__blurb">{brand.blurb}</p>
                                <a className="brand__link" href={brand.href} target="_blank" rel="noreferrer">
                                    查看品牌 <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}
