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
      {/* <button>Back to Search</button> */}

    
        <ImageBox imgs={propertyImages}></ImageBox>
        
        <CityInfoBox property={singleProperty}></CityInfoBox>
     

     
        <div className='description-box-container'>
          <h2>Description</h2>
          <p>{singleProperty?.property_description}</p>
        </div>
     

        <BedroomPricesBox prices={singleProperty?.bedroom_prices} />


      <div className='key-features-container'>
        <h2>Key Features</h2>
        {
        singleProperty?.key_features?.map((item, index)=><p key={index}>{item}</p>)
        }
      </div>
      
    </div>
  )
}

export default HomeDetails