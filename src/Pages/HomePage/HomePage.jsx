import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CityCard from '../../Components/CityCard/CityCard'
import SearchIcon from '../../assets/SearchIcon.png'
import CompareIcon from '../../assets/CompareIcon.png'
import BillsIcon from '../../assets/BillsIcon.png'
import BestSelectionIcon from '../../assets/BestSelectionIcon.png'
import FavoriteIcon from '../../assets/FavoriteIcon.png'
import ManIcon from '../../assets/ManIcon.png'

function HomePage() {

//create user interface
//how many cities are there when the page loads

const [cities, setCities] = useState([])
const [cityId, setCityId] = useState('')

useEffect(
    () => {
        //make API call to filter
        //console.log("running useEffect")
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res => {
            // console.log(res.data.response)
            //store in state
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
            {
                cities.slice(0,9).map(item => <CityCard key={item.id} city={item} />)
            }
        </div>


        <button>See All Cities</button>
        {/* <Link className='allCitiesBtn' to={'/see-all-cities'}>See All Cites</Link> */}

        <div className='homepage-compare-banner'>
            <h2>Compare all inclusive student homes.</h2>
            <div className='compare-info-container'>
                <div className='compare-icon-container'>
                    <img src={SearchIcon} alt="icon" />
                    <h3 className='compare-icon-title'>Search</h3>
                    <p>Find your dream home in the perfect area near your university.</p>
                </div>

                <div className='compare-icon-container'>
                    <img src={CompareIcon} alt="icon" />
                    <h3 className='compare-icon-title'>Compare</h3>
                    <p>Compare student accommodation to find the right home for you.</p>
                </div>

                <div className='compare-icon-container'>
                    <img src={BillsIcon} alt="icon" />
                    <h3 className='compare-icon-title'>Bills Included</h3>
                    <p>Bills are included in all rent prices. No hidden fees.</p>
                </div>
            </div> 
        </div>

        <div className='bottom-banner'>
            <div className='bottom-banner-info-container'>
                <div className='bottom-banner-icon-container'>
                    <img src={BestSelectionIcon} alt="" />
                    <div className='bottom-banner-info'>
                        <h3>Best Selection</h3>
                        <p>Best selection of student accommodations.
                            Never been easier to find a home that's right for you.</p>
                    </div>
                </div>

                <div className='bottom-banner-icon-container'>
                    <img src={FavoriteIcon} alt="" />
                    <div className='bottom-banner-info'>
                        <h3>Your Favorite</h3>
                        <p>Shortlist your favorite properties and send enquiries in one click.</p>
                    </div>
                    
                </div>

                <button className='searchCompareBtn' onClick={() => window.scrollTo(0, 0)}>Search & Compare</button>
                <img className='ManIcon' src={ManIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomePage