import React from 'react'
import './PropertyCard.css'
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";

function PropertyCard({property}) {

  return (
    <div className='property-container'>
      <img className='propertyImg' src={property?.images[0]} />
      <p>€{property?.rent}</p>
      <p className='propertyDetailsIcon'><MdOutlineBed /> {property?.bedroom_count}</p>
      <p className='propertyDetailsIcon'><MdOutlineBathtub /> {property?.bathroom_count}</p>
      <p>Property: {property?.property_type}</p>
      <p>Furnished: {property?.furnished}</p>
      <p className='propertyDetailsIcon'><PiMapPin /> 
      {property?.address.city}, {property?.address.street}, {property?.address.postcode}</p>
      <button className='viewHomeBtn'><PiHouse /> View Home</button>
    </div>
  )
}

export default PropertyCard