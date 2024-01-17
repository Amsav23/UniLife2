import React from 'react'
import './ImageBox.css'

function ImageBox({imgs}) {
    
  return (
    <div className='photos-box'>
      
      <img className='top-image' src={imgs[0]} />
    
      <div className='bottom-images'>
        <img src={imgs[1]} />
        <img src={imgs[2]} />
        <img src={imgs[3]} />
      </div>

    </div>
  )
}

export default ImageBox