import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
// import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function CityDetails() {

    //this page shows details about a specific city
    //this page shows ALL PROPERTIES IN A CITY

    //how do I know which city?
    //the city id is in the URL
    //get city id from the URL with useParams


    const {cityId} = useParams()
    //hhttps://unilife-server.herokuapp.com/properties/city/633a96af6893d471a68cc88f

    //create state for city information
    const [cityInfo, setCityInfo] = useState()

    //create state for ALL PROPERTIES IN A CITY
    const [properties, setProperties] = useState([])
    //square brackets are because this data is an array



    //Function for ALL PROPERTIES IN A CITY
    useEffect (
        
        () => {
            //get the data about the properties in this specific city
            console.log('all properties in a city is running')
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                console.log(res.data.response)
                //store in state
                setProperties(res.data.response)
            })
            .catch(err => console.log(err))


            //get the data about this specific city
            axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
            .then(res => {
                console.log(res.data.data[0])
                //where do I put this data?
                setCityInfo(res.data.data[0])
                
            })
            .catch(err => console.log(err))
        }, [] //runs only once when page loads
    )


    const handleSelect = (e) => {
        console.log('handleSelect is working', e.target.value)
        //store in state
        // setProperties(e.target.value)
    }

    
  return (
    <div className='cityDetails-container'>
        {/* check to see if the cityId return function works*/}
        {/* <div>City Details {cityId}</div> */}
        {/*it works!*/}

        <Slider headline="Search Accomodation"
        subheadline="Whatever you're after, we can help you 
        find the right student accomodation for you."></Slider>

        <div className='cityDetailsFilterBar'>
            {/*this filters the menu for number of bedrooms, bathrooms, etc*/}
            <p className='propertyTitle'>Min Bedroom</p>
            <select onChange={handleSelect} required className='filterBarOption'>
                {<option value='disable selected'>Any bedroom</option>}

                {/*this isn't actually mapping it yet, so need to work on this*/}
                {
                    properties.map(item =>
                        <option value={item.id} key={item._id}>{item.bedroom_prices[0-4]}</option>
                    )
                }
            </select>
            <p className='propertyTitle'>Min Bathroom</p>
            <select className='filterBarOption'>                
                <option value='disable selected'>Any bathroom</option>
            </select>
            <p className='propertyTitle'>Max Price</p>
            <select className='filterBarOption'>
                <option value='disable selected'>Any price</option>
            </select>
            <p className='propertyTitle'>Home Type</p>
            <select className='filterBarOption'>
                <option value='disable selected'>Any type</option>
            </select>
        </div>
       
  
        <h2>{cityInfo?.property_count} Homes in {cityInfo?.name}</h2>
                

        <div className='allPropertiesContainer'>
            {
                properties.map(item=> <PropertyCard key={item?._id} property={item}/> )
            }
        </div>
        

        <div className='allPropertiesDescription'>
            <div className='description-info'>
                <h2>Being a student in {cityInfo?.name}</h2>
                <p>{cityInfo?.student_life}</p>
                <p>{cityInfo?.universities}</p>
            </div>
            <img src={cityInfo?.image_url} />
            
        </div>

    </div>
  )
}

export default CityDetails