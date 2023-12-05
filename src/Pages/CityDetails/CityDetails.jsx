import React, { useEffect } from 'react'
import './CityDetails.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function CityDetails() {

    //this page shows details about a specific city
    //how do I know which city?
    //the city id is in the URL
    //get city id from the URL with useParams


    const {cityId} = useParams()
    // console.log(typeof(cityId))

    //endpoint for Single Properties in One City
    //https://unilife-server.herokuapp.com/properties/city/{city_id}

    useEffect (
        () => {
            console.log('city details is running')
            axios.get(`https://unilife-server.herokuapp.com/properties/city/{city_id}`)
            .then(res => {
                console.log(res)
            }
            )
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

    </div>
  )
}

export default CityDetails