import React from 'react'
import './CityInfoBox.css'
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";

function CityInfoBox({property}) {

  return (
    <div className='city-info-container'>
        <div className='city-info-address'>
            <p>{property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}</p>
        </div>

        <div className='info-top-row'>
            <p>Bedrooms <MdOutlineBed /> {property?.bedroom_count}</p>
            <p>Bathrooms <MdOutlineBathtub/> {property?.bathroom_count}</p>
            <p>Property Type {property?.property_type}</p>
        </div>

        <div className='info-bottom-row'>
            <p>Price €{property?.rent}</p>
            <p>Furnished type {property?.furnished}</p>
            <p>Available from {property?.availability}</p>
        </div>
    </div>

  )
}

export default CityInfoBox