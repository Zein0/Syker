import React from 'react';
import './SlideShow.css';
import './ImageSlider.css';

const delay = 3000;

function Slideshow({slides}) {
  const [current, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  
  return (
    <div>
  <section className='slider,homeImage'>
  
    {slides.map((slide, index) => {
      return (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt='Automatic-Ad-Slider' className='homeImage' />
          )}
        </div>
      );
    })}
     <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${current === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
   
  </section>

  </div>
  
);
}

export default Slideshow;