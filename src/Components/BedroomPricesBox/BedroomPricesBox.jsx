import React from 'react'
import './BedroomPricesBox.css'

function BedroomPricesBox({prices}) {
  // console.log(Object.values(prices))
  // const [bedroomPrices, setBedroomPrices] = React.useState(Object.values(prices))

  // let data = Object.values(prices)
  // console.log(data)

  return (
    <div className='bedroom-prices-box'>
      <h2>Bedroom Prices</h2>

      <div className='prices-info-box'>
        {
          prices.map((item, index) =>
          <div className='box' key={index}>
            <p>Bedroom {index +1}</p>
            <p>€{item} per week</p>
          </div>
          )
        }
      </div>

    </div>
  )
}

export default BedroomPricesBox