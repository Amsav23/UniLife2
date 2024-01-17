import React from 'react'
import './CityInfoBox.css'
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";

function CityInfoBox({property}) {

  return (
    <div className='city-info-container'>

      <div className='small-box1'>
        <p>{property?.address?.street}</p>
        <p> {property?.address?.city}, {property?.address?.postcode}</p>
      </div>

        <div className='small-box2'>
          <div className='small-box3'>
            <p>Bedrooms</p>
            <p>Bathrooms</p>
            <p>Property Type</p>
          </div>

          <div className='small-box4'>
            <h3><MdOutlineBed /> {property?.bedroom_count}</h3>
            <h3><MdOutlineBathtub/> {property?.bathroom_count}</h3>
            <h3>{property?.property_type}</h3>
          </div>

          <div className='small-box3'>
            <p>Price</p>
            <p>Furnished Type</p>
            <p>Available from</p>
          </div>

          <div className='small-box4'>
            <h3>€{property?.rent}</h3>
            <h3>{property?.furnished}</h3>
            <h3>{property?.availability}</h3>
          </div>
        </div> 

      <div className='small-box5'>
        <button className='details-btns1'>Shortlist</button>
        <button className='details-btns 2'>Book Viewing</button>
      </div>        

    </div>

  )
}

export default CityInfoBox