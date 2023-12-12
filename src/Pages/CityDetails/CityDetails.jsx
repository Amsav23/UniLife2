import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function CityDetails() {

    //this page shows details about a specific city
    //how do I know which city?
    //the city id is in the URL
    //get city id from the URL with useParams


    const {cityId} = useParams()
    // console.log(typeof(cityId))

    //create state for single properties
    const [property, setProperty] = useState()

    //create state for all properties in a single city
    const [properties, setProperties] = useState()


    //endpoint for a Single Property
    //https://unilife-server.herokuapp.com/cities/6364c5fdfff841b8724baccd
    useEffect(
        //get the data for this specific city
        () => {
            console.log('single property is running')
            axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
            .then(res => {
                console.log(res.data.data[0])
                //store state
                setProperty(res.data.data[0])
            })
            .catch(err => console.log(err))
        }, [] //runs only once when page
    )

    //endpoint for ALL Properties in One City
    //https://unilife-server.herokuapp.com/properties/city/${cityId}
    useEffect (
        //get the data about the properties in this specific city
        () => {
            console.log('all properties is running')
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

        <div>
            <p>min bedroom</p>
            <p>Min bathroom</p>
            <p>Max Price</p>
            <p>Home Type</p>
        </div>

        <div>
            <p>Number of Homes in ...</p>
        </div>

        <div>Being a student in ...</div>


        {/* <div className='PropertyCard-container'>
            {
                property.slice(0,9).map(item => <PropertyCard key={item._id} property={item} />)
            }
            
        </div> */}

    </div>
  )
}

export default CityDetails