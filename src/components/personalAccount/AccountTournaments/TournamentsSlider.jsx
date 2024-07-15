import React from 'react'
import styles from "./AccountTournaments.module.scss"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SliderCard from './SliderCard';

import arrow from '../../../assets/personalAccount/tournaments/arrow.svg'
import { slidercards } from '../../../data/slidercards.js';

const TournamentsSlider = () => {
  
  const SlickArrowRight = ({ onClick }) => (
    <img onClick={onClick} className={`${styles['slick-next']} slick-arrow slick-next`} src={arrow} alt="arrow" />
  );
  const SlickArrowLeft = ({ onClick }) => (
    <img onClick={onClick} className={`${styles['slick-prev']} slick-arrow slick-prev`} src={arrow} alt="arrow"/>
  );

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight/>,
    prevArrow: <SlickArrowLeft/>
  };

  return (
    <>
        <Slider {...settings}>
          {slidercards.map((item, index) => {
            return(
              <SliderCard key={index} img={item.img} date={item.date} game={item.game}/>
            )
          })}
        </Slider>

    </>
  )
}

export default TournamentsSlider