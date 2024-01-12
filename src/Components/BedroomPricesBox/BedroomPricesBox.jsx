import React from 'react'
import './BedroomPricesBox.css'

function BedroomPricesBox({prices}) {
  return (
    <div className='bedroom-prices-box'>
        <h2>Bedroom Prices</h2>

        <div className='bed-box'>
        {
            prices && Object.values(prices).map((item, index) =>
            <div className="bed-prices" key={index}>
              <p>{`Bedroom ${index + 1}`}</p>
              <p>{`£${item} per week`}</p>
            </div>
        )}
      </div>
    </div>
  )
}

export default BedroomPricesBox