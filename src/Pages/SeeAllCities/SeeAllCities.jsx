import React, { useEffect, useState } from 'react'
import './SeeAllCities.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
// import CityCard from '../../Components/CityCard/CityCard'

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
    <div className='seeAllCities-container'>
        <Slider headline="Student Accomodation"
        subheadline="UniLife have student accomodation available across 
        the UK. Whatever you're after, we can help you find the right 
        student accomodation for you."></Slider>

        <div className='searchByCity-container'>
            <h1>Search by City</h1>
        {
            cities.map(item =>
                <option value={item.id} key={item._id}>{item.name}</option>
            ) //this maps all of the cities
        }

        {/* <Link to={`/citydetails/${cityId}`}><button className="find-homes-button">Find Homes</button></Link> */}

        {/*I want each city to be recognized when I link to it */}



        {/* <div className='cityCard-container'>
            {
                cities.map(item => <CityCard key={item._id} city={item} />)
            }
        </div> */}

        </div>

    </div>

        
  )
}

export default SeeAllCities