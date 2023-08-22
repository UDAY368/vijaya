import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/testimonials_info.json";
import { sliderSettings } from "../../utils/common";

const Testimonials = () => {
  return (
    <section className="t-wrapper">
      <div className="paddings innerWidth t-container">
        <div className="t-head flexColStart">
          <span className="orangeText">Student Reviews</span>
          <span className="primaryText">Testimonials</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColCenter t-card">
                <img src={card.image} alt="review" />
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.studies}</span>
                <span className="secondaryText t-review">
                  <span className="t-quote">"</span> {card.review}
                  <span className="t-quote">"</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter t-button">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
