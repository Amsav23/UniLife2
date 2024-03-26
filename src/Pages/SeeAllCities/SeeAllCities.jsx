import React, { useEffect, useState } from 'react'
import './SeeAllCities.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function SeeAllCities() {
    //this page needs to show ALL of the cities

    //create state for cities
    const [cities, setCities] = useState([])

    //create state for city selection
    const [selectCity, setSelectCity] = useState()

    const {cityId} = useParams()
    //hhttps://unilife-server.herokuapp.com/properties/city/633a96af6893d471a68cc88f


    useEffect(
        () => {
            //make API call to get All of the cities
            // console.log("running useEffect")
            axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
            .then(res => {
                console.log(res.data.response)
                //store in state
                setCities(res.data.response)
                })
            .catch(err => console.log(err))
            }, [] //runs only once when page loads
    )

    //I need useEffect to run when a city is selected
    useEffect (
        () => {
            console.log("running useEffect for selectCity")
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        }, [selectCity] //runs once when user selects a city
    )


    // const handleCitySelection = (e) => {
    //     console.log("hello city", e.target.value)
    //     //store user input for city selection
    //     setSelectCity(e.target.value)
    // }
    

  return (
    <div className='seeAllCities-container'>
        <Slider headline="Student Accomodation"
        subheadline="UniLife have student accomodation available across 
        the UK. Whatever you're after, we can help you find the right 
        student accomodation for you."></Slider>

        <div className='searchByCity-container'>
            <h1>Search by City</h1>
            <div className='city-btns'>
                {
                    cities.map(item =>
                        <Link to={`/citydetails/${item._id}`}>
                            <p key={item._id}>{item.name}</p>
                        </Link>
                    ) //this maps all of the cities
                }
            </div>
        </div>

    </div>

  )
}

export default SeeAllCities