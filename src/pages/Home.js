import React from "react";
import { Link } from "react-router-dom";

const HERO = "https://kuanda-design.s3.amazonaws.com/1-5.jpg";

export default function Home() {
  return (
    <section className="hero">
      <img className="hero__image" src={HERO} alt="" aria-hidden="true" />

      <div className="hero__content">
        {/* 頁面真正的 h1。舊版用空的 h1 加 <br> 撐版面，
            標題其實是 h3，等於這頁沒有主標題。 */}
        <h1 className="hero__title">
          <span className="hero__title-en">H-C-D Design of Art</span>
          <span className="hero__title-tc">程奕設計</span>
        </h1>

        <p className="hero__tagline">建築安全、設計環境、健康裝置藝術</p>

        <Link className="hero__cta" to="/project">
          查看作品 <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
