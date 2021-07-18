import React, { useState } from 'react';
import { SliderDataSports_1,SliderDataSports_2,SliderDataSports_3,SliderDataCasual_1,SliderDataCasual_2,SliderDataCasual_3 } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css'


const ImageSlider = ({ slides }) => {
  console.log(slides);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return (
      <div>
    <section className='slider,homeImage'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='homeImage' />
            )}
          </div>
        );
      })}
    </section>

    </div>
    
  );
};

export default ImageSlider;