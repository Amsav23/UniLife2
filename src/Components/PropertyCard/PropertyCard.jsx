import React from 'react'
import './PropertyCard.css'
import { Link } from 'react-router-dom'


function PropertyCard({property}) {

    return (
      <div className='property-container'>

        
          {/* <Link to={`/citydetails/${city._id}`}> <img className='cityCard-img' 
          src={city?.image_url} /> </Link>

          <div className='property-container-info'>
              <h1>{city.name}</h1>
              <p>{city.property_count} properties</p>
          </div> */}
      </div>
    )
  }

export default PropertyCard