import image1_5 from '../images/1-5.jpg';
import image2_6 from '../images/2-6.jpg';
import image3_1 from '../images/3-1.jpg';
import image4_1 from '../images/4-1.jpg';
import image5_1 from '../images/5-1.jpg';
import image7_1 from '../images/7-1.jpg';
import image8_1 from '../images/8-1.jpg';


import "../styles.scss";


export default function Project() {
  return (
    <>
      <figure>
        <blockquote className="blockquote">
          <p>住宅空間設計</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          RESIDENTIAL SPACE<cite title="Source Title"></cite>
        </figcaption>
      </figure>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ textAlign: 'center', borderWidth: 'thick' }}>
        <a className="col" href='/project/residence-one'>
          <div className="card h-100" style={{height: '100%', borderWidth: '0px' }}>
            <img src={image1_5} className="card-img-top" height='100%' alt="" />
            <div className="card-body">
              <h6 className="card-title">安和路作品</h6>
              {/* <p className="card-text" style={{fontSize: "12px"}}>坪數: 30</p> */}
            </div>
          </div>
        </a>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image2_6} className="card-img-top" height='100%' alt="" />
            <div className="card-body">
              <h6 className="card-title">中山北路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image3_1} className="card-img-top" height='100%' alt="" />
            <div className="card-body">
              <h6 className="card-title">信義路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image4_1} className="card-img-top" height='100%' alt="" />
            <div className="card-body">
              <h6 className="card-title text-body">光復北路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image5_1} className="card-img-top" height='100%' alt="" />
            <div className="card-body">
              <h6 className="card-title text-body">天母西路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image7_1} className="card-img-top" height='100%' alt="" />
            <div className="card-body">
              <h6 className="card-title text-body">淡水溫泉宅作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <blockquote className="blockquote">
          <p>商業空間設計</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Commercial Space<cite title="Source Title"></cite>
        </figcaption>
      </figure>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ textAlign: 'center', borderWidth: 'thick' }}>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image8_1} className="card-img-top" alt="" />
            <div className="card-body">
              <h6 className="card-title">衡陽路辦公室</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>)
}