import React from "react";
const Home = () => {
  return (
    <div className="bg-dark text-white vh-100 w-100 position-absolute top-0 start-0" style={{ zIndex: -10, background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("https://kuanda-design.s3.amazonaws.com/1-5.jpg")`, backgroundSize: 'cover' }}>
        <div class="d-flex flex-row justify-content-center align-items-center h-100">
          <div className="text-center">
            <h1>程奕設計</h1>
            <h1>H-C-D Design of Art</h1>
            {/* <p class="card-text">123</p>
            <p class="card-text">456</p> */}
          </div>
        </div>
    </div>
  );
};

export default Home;
