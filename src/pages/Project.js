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
    { title: '住宅空間設計', label: 'RESIDENTIAL SPACE', samples: residences },
    { title: '商業空間設計', label: 'COMMERCIAL SPACE', samples: commercials },
  ]

  return (
    <>
      {categories.map((category) => (
        <section className="work-section" key={category.label}>
          <h2 className="work-section__title">{category.title}</h2>
          <p className="work-section__label">{category.label}</p>

          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            {category.samples.map((residence) => (
              <div className="col" key={residence.id}>
                <a className="work-card" href={`/project/${residence.id}`}>
                  <div className="work-card__media">
                    <img src={residence.src} alt={residence.name} loading="lazy" />
                  </div>
                  <h3 className="work-card__title">{residence.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
