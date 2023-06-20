import image1_5 from '../images/1-5.jpg';
import image2_6 from '../images/2-6.jpg';
import image3_1 from '../images/3-1.jpg';
import image4_1 from '../images/4-1.jpg';
import image5_1 from '../images/5-1.jpg';
import image7_1 from '../images/7-1.jpg';
import image8_1 from '../images/8-1.jpg';


import "../styles.scss";


export default function Project() {

  const residences = [
    { id: '1', name: '安和路作品', src: image1_5 },
    { id: '2', name: '中山北路作品', src: image2_6 },
    { id: '3', name: '信義路作品', src: image3_1 },
    { id: '4', name: '光復北路作品', src: image4_1 },
    { id: '5', name: '天母西路作品', src: image5_1 },
    { id: '6', name: '淡水溫泉宅作品', src: image7_1 },
  ]

  const commercials = [
    { id: '7', name: '衡陽路辦公室', src: image8_1 },
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