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
// import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function CityDetails() {

    //this page shows details about a specific city
    //this page shows ALL PROPERTIES IN A CITY

    //how do I know which city?
    //the city id is in the URL
    //get city id from the URL with useParams


    const {cityId} = useParams()
    //hhttps://unilife-server.herokuapp.com/properties/city/633a96af6893d471a68cc88f

    // //create state for single properties
    // const [property, setProperty] = useState()

    //create state for ALL PROPERTIES IN A CITY
    const [properties, setProperties] = useState([])


    //endpoint for a Single Property
    //https://unilife-server.herokuapp.com/cities/6364c5fdfff841b8724baccd
    // useEffect(
    //     //get the data for this specific city
    //     () => {
    //         console.log('single property is running')
    //         axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
    //         .then(res => {
    //             console.log(res.data.data[0])
    //             //store state
    //             setProperty(res.data.data[0])
    //         })
    //         .catch(err => console.log(err))
    //     }, [] //runs only once when page
    // )




    //Function for ALL PROPERTIES IN A CITY
    useEffect (
        //get the data about the properties in this specific city
        () => {
            console.log('all properties in a city is running')
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                console.log(res.data.response)
                //store in state
                setProperties(res.data.response)
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
                {<option value='disable selected'>Any bathroom</option>}
            </select>
            <p className='propertyTitle'>Max Price</p>
            <select className='filterBarOption'>
                {<option value='disable selected'>Any price</option>}
            </select>
            <p className='propertyTitle'>Home Type</p>
            <select className='filterBarOption'>
                {<option value='disable selected'>Any type</option>}
            </select>
        </div>
       

        <div className='allPropertiesCount'>
            {
                properties.slice(0-1).map(item=> <div value={item.id} key={item._id}>
                <p>Homes in {item.address.city}</p>
                </div>)
            }
        </div>

        <div className='allPropertiesContainer'>
            {
                properties.map(item=> <div value={item.id} key={item._id}>
                    <div className='propertyDetails'>
                        <img className='propertyImg' src={`${item.images[0]}`} alt=""></img>
                        <p>€{item.rent}</p>
                        <p className='propertyDetailsIcon'><MdOutlineBed /> {item.bedroom_count}</p>
                        <p className='propertyDetailsIcon'><MdOutlineBathtub /> {item.bathroom_count}</p>
                        <p>Property: {item.property_type}</p>
                        <p>Furnished: {item.furnished}</p>
                        <p className='propertyDetailsIcon'><PiMapPin /> 
                        {item.address.street}, {item.address.city}, {item.address.postcode}</p>
                        <button className='viewHomeBtn'><PiHouse /> View Home</button>
                    </div>
                </div>)
            }
        </div>
        

        <div className='allPropertiesDescription'>
            {
                properties.slice(0-1).map(item=> <div value={item.id} key={item._id}>
                <h3>Being a student in {item.address.city}</h3>
                <p>{item.property_description}</p>
                </div>)
            }
        </div>

    </div>
  )
}

export default CityDetails