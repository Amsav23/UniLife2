import React, { useEffect, useState } from 'react'
import './SeeAllCities.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
// import CityCard from '../../Components/CityCard/CityCard'

function SeeAllCities() {
    //this page needs to show ALL of the cities

    //create state for cities
    const [cities, setCities] = useState([])

    // //create state for individual city?
    // const [city, setCity] = useState([])

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

    //each city needs to link to City Details
    //need details of each city
    //info about a single property URL
    //https://unilife-server.herokuapp.com/properties/6364c5fdfff841b8724baccd

    // useEffect(
    //     () => {
    //         //make API call to get single property
    //         console.log("running second useEffect")
    //         axios.get(`https://unilife-server.herokuapp.com/properties/`)
    //         .then(
    //             console.log(res)
    //         )
    //         .catch(err => console.log(err))
    //     }, [] //runs only once when page loads
    // )


    //use onClick function
    const handleClick = (e) => {
        e.preventDefault();
        console.log('city was selected')
    }
    

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
                // <button onClick={handleClick}>Click here</button>
                cities.map(item =>
                    <button onClick={handleClick}>
                        <option value={item.id} key={item._id}>{item.name}</option>
                    </button>
                ) //this maps all of the cities
                }
            </div>

            {/* not sure what I'm doing yet
            <button onClick={() => this.handleClick(property_id)}></button> */}
        

            



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