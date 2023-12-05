import React, { useEffect, useState } from 'react'
import './SeeAllCities.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'

function SeeAllCities() {
    //this page needs to show ALL of the cities

    //create state for cities
    const [cities, setCities] = useState([])

    useEffect(
        () => {
            //make API call to get All of the cities
            console.log("running useEffect")
            axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
            .then(res => {
                console.log(res.data.response)
                //store in state
                setCities(res.data.response)
                })
            .catch(err => console.log(err))
            }, [] //runs only once when page loads
    )

  return (
    <div>
        <Slider headline="Student Accomodation"
        subheadline="UniLife have student accomodation available across 
        the UK. Whatever you're after, we can help you find the right 
        student accomodation for you."></Slider>

        <div className='search-title'>
            <h1>Search by City</h1>
        {
            cities.map(item =>
                <option value={item.id} key={item._id}>{item.name}</option>
            ) //this maps all of the cities
        }
        </div>

    </div>

        
  )
}

export default SeeAllCities