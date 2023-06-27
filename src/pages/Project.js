export default function Project() {

  const residences = [
    { id: '1', name: '安和路作品', src: "https://kuanda-design.s3.amazonaws.com/1-5.jpg" },
    { id: '2', name: '中山北路作品', src: "https://kuanda-design.s3.amazonaws.com/2-6.jpg" },
    { id: '3', name: '信義路作品', src: "https://kuanda-design.s3.amazonaws.com/3-1.jpg" },
    { id: '4', name: '光復北路作品', src: "https://kuanda-design.s3.amazonaws.com/4-1.jpg" },
    { id: '5', name: '天母西路作品', src: "https://kuanda-design.s3.amazonaws.com/5-1.jpg" },
    // { id: '6', name: '淡水溫泉宅作品', src: "https://kuanda-design.s3.amazonaws.com/7-1.jpg" },
  ]

  const commercials = [
    { id: '8', name: '衡陽路辦公室', src: "https://kuanda-design.s3.amazonaws.com/8-1.jpg" },
  ]

  const categories = [
    { blockquote: '住宅空間設計' , figcaption: 'RESIDENTIAL SPACE', samples: residences },
    { blockquote: '商業空間設計' , figcaption: 'COMMERCIAL SPACE', samples: commercials },
  ]

  return (
    <>
      {categories.map((category) => {
        return (
          <>
            <figure>
              <blockquote className="blockquote">
                <p>{category.blockquote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {category.figcaption}<cite title="Source Title"></cite>
              </figcaption>
            </figure>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ textAlign: 'center', borderWidth: 'thick' }}>
              {category.samples.map((residence) => {
                return (
                  <a className="col text-dark" href={`/project/${residence.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card h-100" style={{height: '100%', borderWidth: '0px' }}>
                      <img src={residence.src} className="card-img-top" height='100%' alt="" />
                      <div className="card-body">
                        <h6 className="card-title">{residence.name}</h6>
                        {/* <p className="card-text" style={{fontSize: "12px"}}>坪數: 30</p> */}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </>
        )
      })}
    </>
  )
}