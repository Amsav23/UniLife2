import React from 'react'
import './DropDownMenu.css'

function DropDownMenu({setBedroomCount}) {

    function handleBedrooms(e) {
        console.log('hello', e.target.value)
        //what is the user input
        //store the user input in state
        setBedroomCount(e.target.value)
    }

  return (
    
    <div className='dropdown-container'>


        <div className='dropdown-options'>
            <h4>Min Bedrooms</h4>
            <select id="minBedroom"
                    onChange={handleBedrooms}
            >
                <option value="Any bedroom">Any bedroom</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <div className='dropdown-options'>
            <h4>Min Bathrooms</h4>
            <select id="minBathroom">
                <option value="Any bathroom">Any bathroom</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

        <div className='dropdown-options'>
            <h4>Max Price</h4>
            <select id="anyPrice">
                <option value="Any price">Any price</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

        <div className='dropdown-options'>
            <h4>Home Type</h4>
            <select id="homeType">
                <option value="Any type">Any type</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

    </div>

  )
}

export default DropDownMenu