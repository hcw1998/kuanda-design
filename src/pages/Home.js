import React from "react";
import image1_5 from '../images/1-5.jpg'
const Home = () => {
  return (
    <div className="bg-dark text-white vh-100 w-100 position-absolute top-0 start-0" style={{ zIndex: -100, background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${image1_5})` }}>
        <div class="d-flex flex-row justify-content-center align-items-center h-100">
          <div className="text-center">
            <h1>寬達設計</h1>
            <h1>KuanDa Design</h1>
            {/* <p class="card-text">123</p>
            <p class="card-text">456</p> */}
          </div>
        </div>
    </div>
  );
};

export default Home;
