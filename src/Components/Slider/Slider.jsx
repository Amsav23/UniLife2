import React from 'react'
import './Slider.css'


function Slider({headline, subheadline}) {

    return (
        <div className='slider-ul'>
          <div className="slider-overlay"></div>
          <div className="slider-text">
            <h1>{headline}</h1>
            <h4>{subheadline}</h4>
          </div>
        </div>
      );
}

export default Slider