import React from 'react'
import './PropertyCard.css'
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";

function PropertyCard({property}) {

  return (
    <div className='property-card-container'>
      <img src={property?.images[0]} />

      <div className='blue-box'>
        <div className='blue-box-left'>
          <h2>€{property?.rent}</h2>
          <p>pppw including bills</p>
        </div>

        <div className='blue-box-right'>
          <p className='property-details-icon'><MdOutlineBed /> {property?.bedroom_count}</p>
          <p className='property-details-icon'><MdOutlineBathtub /> {property?.bathroom_count}</p>
        </div>
      </div>

      <div className='white-box'>
        <div className='white-box-top'>
          <p>Detached {property?.property_type}</p>
          <p>Fully Furnished {property?.furnished}</p>
        </div>

        <div className='white-box-bottom'>
          <p>Address line here</p>
          {/* <p className='propertyDetailsIcon'><PiMapPin />  */}
          {/* {property?.address.city}, {property?.address.street}, {property?.address.postcode}</p> */}
        </div>
      </div>

      <div className='view-home-btn'><PiHouse /> View Home</div>
    </div>
  )
}

export default PropertyCard