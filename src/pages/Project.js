import image1 from '../images/01.jpg';
import image2 from '../images/02.jpg';
import image3 from '../images/03.jpg';
import "../styles.scss";


export default function Project() {
  return (
    <>
      <figure>
        <blockquote className="blockquote">
          <p>住宅空間設計</p>
        </blockquote>
        <figcaption className="blockquote-footer">
           RESIDENCE<cite title="Source Title"></cite>
        </figcaption>
      </figure>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{ textAlign: 'center', borderWidth: 'thick' }}>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image1} className="card-img-top" alt="design-one" />
            <div className="card-body">
              <h6 className="card-title">仁愛路作品</h6>
              {/* <p className="card-text" style={{fontSize: "12px"}}>坪數: 30</p> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image2} className="card-img-top" alt="design-two" />
            <div className="card-body">
              <h6 className="card-title">信義路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image3} className="card-img-top" alt="design-three" />
            <div className="card-body">
              <h6 className="card-title">光復南路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image1} className="card-img-top" alt="design-one" />
            <div className="card-body">
              <h6 className="card-title">桂林路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image1} className="card-img-top" alt="design-one" />
            <div className="card-body">
              <h6 className="card-title">仁愛路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image2} className="card-img-top" alt="design-two" />
            <div className="card-body">
              <h6 className="card-title">信義路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image3} className="card-img-top" alt="design-three" />
            <div className="card-body">
              <h6 className="card-title">光復南路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image1} className="card-img-top" alt="design-one" />
            <div className="card-body">
              <h6 className="card-title">桂林路作品</h6>
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
           COMMERCIAL<cite title="Source Title"></cite>
        </figcaption>
      </figure>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{ textAlign: 'center', borderWidth: 'thick' }}>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image3} className="card-img-top" alt="design-three" />
            <div className="card-body">
              <h6 className="card-title">光復南路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image1} className="card-img-top" alt="design-one" />
            <div className="card-body">
              <h6 className="card-title">桂林路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{ borderWidth: '0px' }}>
            <img src={image1} className="card-img-top" alt="design-one" />
            <div className="card-body">
              <h6 className="card-title">仁愛路作品</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>)
}