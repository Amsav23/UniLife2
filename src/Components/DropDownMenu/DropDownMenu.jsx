import React from 'react'
import './DropDownMenu.css'

function DropDownMenu({setBedroomCount, setBathroomCount, setPropertyType, setRent}) {

    function handleBedrooms(e) {
        // console.log('hello', e.target.value)
        //what is the user input
        //store the user input in state
        setBedroomCount(e.target.value)
    }

    function handleBathrooms(e) {
        // console.log("hello bathrooms", e.target.value)
        //store user input for # of bathrooms in state
        setBathroomCount(e.target.value)
    }

    function handlePropertyType(e) {
        // console.log("hello properties", e.target.value)
        //store user input for Home Type in state
        setPropertyType(e.target.value)
    }

    function handleRent(e) {
        // console.log("hello rent price", e.target.value)
        //store user input for Rent in state
        setRent(e.target.value)
    }

  return (
    
    <div className='dropdown-container'>

        <div className='dropdown-options'>
            <h4>Min Bedrooms</h4>
            <select className='options' id="minBedroom"
                    onChange={handleBedrooms}
            >
                <option value="1">Any bedroom</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>

        <div className='dropdown-options'>
            <h4>Min Bathrooms</h4>
            <select className='options' id="minBathroom"
                    onChange={handleBathrooms}
            >
                <option value="1">Any bathroom</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>

        <div className='dropdown-options'>
            <h4>Max Price</h4>
            <select className='options' id="anyPrice"
                    onChange={handleRent}
            >
                <option value="">Any price</option>
                <option value="600">€600</option>
                <option value="800">€800</option>
                <option value="900">€900</option>
                <option value="1200">€1200</option>
                <option value="1500">€1500</option>
                <option value="2450">€2450</option>
            </select>
        </div>

        <div className='dropdown-options'>
            <h4>Home Type</h4>
            <select className='options' id="homeType"
                    onChange={handlePropertyType}
            >
                <option value="">Any type</option>
                <option value="Apartment">Apartment</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
            </select>
        </div>

    </div>

  )
}

export default DropDownMenu