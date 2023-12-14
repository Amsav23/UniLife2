import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'
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

    
  return (
    <div className='cityDetails-container'>
        {/* check to see if the cityId return function works*/}
        <div>City Details {cityId}</div>

        <Slider headline="Search Accomodation"
        subheadline="Whatever you're after, we can help you 
        find the right student accomodation for you."></Slider>

        <div className='cityDetailsFilterBar'>
            <p>min bedroom {properties?.availability}</p>
            <p>Min bathroom</p>
            <p>Max Price</p>
            <p>Home Type</p>
        </div>
        

        <div className='allPropertiesCount'>
            {
                properties.slice(0-1).map(item=> <div value={item.id} key={item._id}>
                <p> Homes in {item.address.city}</p>
                </div>)
            }
        </div>

        <div className='allPropertiesContainer'>
            {
                properties.map(item=> <div value={item.id} key={item._id}>
                    <div className='propertyDetails'>
                        <img className='propertyImg' src={`${item.images[0]}`} alt=""></img>
                        <p>Euros: {item.rent}</p>
                        <p>Bedrooms {item.bedroom_count}</p>
                        <p>Bathrooms {item.bathroom_count}</p>
                        <p>Property: {item.property_type}</p>
                        <p>Furnished: {item.furnished}</p>
                        <p>Address: {item.address.street}</p>
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