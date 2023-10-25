import React from 'react'
import './CityCard.css'
import { Link } from 'react-router-dom'

function CityCard({city}) {

  return (
    <div className='city-container'>
        <Link to={`/details/${city.id}`}> <img className='cityCard-img' src={city?.image_url} /> </Link>

        <div className='city-container-info'>
            <h1>{city.name}</h1>
            <p>{city.property_count} properties</p>
        </div>
    </div>
  )
}

export default CityCard