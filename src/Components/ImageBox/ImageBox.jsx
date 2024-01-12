import React from 'react'
import './ImageBox.css'

function ImageBox({propertyImages}) {
    
  return (
    <div className='photos-box'>
        Photo Box
        <p>{propertyImages?.images[0]}</p>
    </div>
  )
}

export default ImageBox