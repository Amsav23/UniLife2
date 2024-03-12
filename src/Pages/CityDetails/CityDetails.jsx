import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu'


function CityDetails() {

    //This is if I ever wanted to style the property cards manually if the api was down
    // const property1 = {
    //     rent: 110,
    //     bedroom_count: 4,
    //     bathroom_count: 2,
    //     _id: 99,
    //     images: [property1_img]
    // }

    //this page shows details about a specific city
    //this page shows ALL PROPERTIES IN A CITY

    //how do I know which city?
    //the city id is in the URL
    //get city id from the URL with useParams

    const {cityId} = useParams()
    //hhttps://unilife-server.herokuapp.com/properties/city/633a96af6893d471a68cc88f

    //create state for city information
    const [cityInfo, setCityInfo] = useState()

    //create state for ALL PROPERTIES IN A CITY
    const [properties, setProperties] = useState([])
    //square brackets are because this data is an array
    //This const is part of constructing manually//
    // const [properties, setProperties] = useState([property1])

    //create a state to store the number of bedrooms that the USER chooses
    const [bedroomCount, setBedroomCount] = useState(1)

    //create a state to store the number of bathrooms that the USER chooses
    const [bathroomCount, setBathroomCount] = useState(1)

    //create a state to store the property/home type that the USER chooses
    const [propertyType, setPropertyType] = useState()

    //create a state to store the rent/max price that the USER chooses
    const [rent, setRent] = useState()

    const [propertyCount, setPropertyCount] = useState(0)


    //Function for ALL PROPERTIES IN A CITY
    useEffect (
        
        () => {
            console.log("page loaded")
            //get the data about the properties in this specific city
            // console.log('all properties in a city is running')
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                console.log(res.data)
                console.log(res.data.total)
                //store the property count
                setPropertyCount(res.data.total)
                //store in state
                setProperties(res.data.response)
            })
            .catch(err => console.log(err))


            //get the data about this specific city
            // console.log('data about specific city is running')
            axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
            .then(res => {
                console.log(res.data.data[0])
                //where do I put this data?
                setCityInfo(res.data.data[0])
                
            })
            .catch(err => console.log(err))
        }, [] //runs only once when page loads
    )


    //I need useEffect to run when bedroom count/bathroom count changes
    //when any of these states change, make the api call to filter the data
    useEffect (
        ()=> {
            console.log("beds", bedroomCount)
            console.log("bathrooms", bathroomCount)
            console.log("homes", propertyType)
            console.log("rent", rent)
            //make api call to filter the properties
            const query={
                city_id: cityId,
                bedroom_count: bedroomCount,
                bathroom_count: bathroomCount,
                property_type: propertyType,
                rent: rent,
            }
            axios.post("https://unilife-server.herokuapp.com/properties/filter", {query})
            .then(res => {
                console.log(res.data)
                console.log(res.data.count)
                //store the property count
                setPropertyCount(res.data.count)
                //show THESE properties on the page
                setProperties(res.data.response)
            })
            .catch(err => console.log(err))
        }, [bedroomCount, bathroomCount, propertyType, rent] //dependency array
        //runs when any of the queries above changes
    )

    
  return (
    <div className='cityDetails-container'>
        {/* check to see if the cityId return function works*/}
        {/* <div>City Details {cityId}</div> */}
        {/*it works!*/}


        <Slider headline="Search Accomodation"
        subheadline="Whatever you're after, we can help you 
        find the right student accomodation for you."></Slider>

       
        <DropDownMenu 
            setBedroomCount={setBedroomCount}
            setBathroomCount={setBathroomCount}
            setPropertyType={setPropertyType}
            setRent={setRent}
        />


        <h2 className='title-card'>{propertyCount} Homes in {cityInfo?.name}</h2>
                

        <div className='property-card-space'>
            {
                properties?.map((item)=><PropertyCard key={item?._id} property={item}/>)
            }
        </div>
        

        <div className='allPropertiesDescription'>
            <div className='description-info'>
                <h2>Being a student in {cityInfo?.name}</h2>
                <p>{cityInfo?.student_life}</p>
                <p>{cityInfo?.universities}</p>
            </div>
            <img src={cityInfo?.image_url} />
            
        </div>

    </div>
  )
}

export default CityDetails