import React from "react";
import image1_5 from '../images/1-5.jpg'
const Home = () => {
  return (
    <div>
      <div class="card bg-dark text-white" style={{ borderWidth: '0px' }}>
        <img src={image1_5} className="card-img" alt=""/>
          <div class="card-img-overlay">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <p class="card-text"></p>
          </div>
      </div>
    </div>
  );
};

export default Home;
