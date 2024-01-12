import React, { useEffect, useState } from 'react'
import './HomeDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import ImageBox from '../../Components/ImageBox/ImageBox'
import CityInfoBox from '../../Components/CityInfoBox/CityInfoBox'
import BedroomPricesBox from '../../Components/BedroomPricesBox/BedroomPricesBox'


function HomeDetails() {

  const {propertyId} = useParams()

  //create state for info about a SINGLE PROPERTY
  const [singleProperty, setSingleProperty] = useState([])

  //create state for property info
  const [propertyImages, setPropertyImages] = useState([])

  //this endpoint is for a single property
  //https://unilife-server.herokuapp.com/properties/6364c5fdfff841b8724baccd
  useEffect (

      () => {
        console.log('endpoint is running')
        axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
        .then(res => {
          console.log(res.data)
          //I have data, now I need to store it
          setSingleProperty(res.data)
          setPropertyImages(res.data?.images)
        })
        
        .catch(err => console.log(err))

      }, [] //runs only once when page loads

  )

  
  return (
    <div className='home-details-container'>
      <div className='back-option'>Back to Search</div>

      <div className='photos-container'>
        <ImageBox imgs={propertyImages}></ImageBox>
      </div>

      <div className='city-info-box-container'>
        <CityInfoBox property={singleProperty}></CityInfoBox>
      </div>

      <div className='description-box-container'>
        <h2>Description</h2>
        <p>{singleProperty?.property_description}</p>
      </div>

      <div className='bedroom-prices-container'>
        <BedroomPricesBox prices={singleProperty?.bedroom_prices} />        
      </div>

      <div className='key-features-container'>
        <p>{singleProperty?.key_features}</p>
      </div>
      
    </div>
  )
}

export default HomeDetails