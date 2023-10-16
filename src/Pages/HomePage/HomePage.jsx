import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { Link } from 'react-router-dom'

function HomePage() {

//create user interface
//how many cities are there when the page loads

const [cities, setCities] = useState([])
const [cityId, setCityId] = useState('')

useEffect(
    () => {
        //make API call to filter
        console.log("running useEffect")
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res => {
            // console.log(res.data.response)
            setCities(res.data.response)
            }
        )
        .catch(err => {
            console.log(err)
        }, []

        )
    }
)

const handleSelect = (e) => {
    console.log('select', e.target.value)
    setCityId(e.target.value)
}


  return (
    <div className='homepage-container'>
        <Slider headline="Find student homes with bills included"
        subheadline="A simple and faster way to search for student accommodation"></Slider>

    <div className='searchbar-container'>
        <select onChange={handleSelect} required className='searchbar-option'>
            <option value="disable selected">Search by city</option>
            {
                cities.map(item =>
                    <option value={item.id} key={item.id}>{item.name}</option>
                )
            }
        </select>
        <Link to={`/details/${cityId}`}><button className="find-homes-button">Find Homes</button></Link>
    </div>

    <h2>Student accommodations in our top cities</h2>
    <div className='cityCard-container'>
        {cities.slice(0, 9).map((city) => (
          <>
            <img src={city.image_url} />
            <p className='city-name'>{city.name}</p>
          </>
        ))}
      </div>

    </div>
  )
}

export default HomePage