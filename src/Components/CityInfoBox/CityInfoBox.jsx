import React from 'react'
import './CityInfoBox.css'
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import Modal from 'react-modal';
import { MdOutlineAddHomeWork } from "react-icons/md";

function CityInfoBox({property}) {

  const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '26px',
    },
    overlay:{
        backgroundColor: "rgba(0,0,0,0.5",
    }
  }

  //Make to bind modal to your element
  Modal.setAppElement(document.getElementById("root"))

  //create state to Control my Modal
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className='city-info-container'>

      <div className='small-box1'>
        <p>{property?.address?.street}</p>
        <p> {property?.address?.city}, {property?.address?.postcode}</p>
      </div>

        <div className='small-box2'>
          <div className='small-box3'>
            <p>Bedrooms</p>
            <p>Bathrooms</p>
            <p>Property Type</p>
          </div>

          <div className='small-box4'>
            <h3><MdOutlineBed /> {property?.bedroom_count}</h3>
            <h3><MdOutlineBathtub/> {property?.bathroom_count}</h3>
            <h3>{property?.property_type}</h3>
          </div>

          <div className='small-box3'>
            <p>Price</p>
            <p>Furnished Type</p>
            <p>Available from</p>
          </div>

          <div className='small-box4'>
            <h3>€{property?.rent}</h3>
            <h3>{property?.furnished}</h3>
            <h3>{property?.availability}</h3>
          </div>
        </div> 

      <div className='small-box5'>
        <button className='details-btn1'>Shortlist</button>
        <button className='details-btn2' onClick={()=>setIsOpen(true)}>Book Viewing</button>
      </div>  


      <Modal
            isOpen={isOpen}
            onRequestClose={()=>setIsOpen(false)}
            style={customStyles}
            contentLabel="Contact Us Modal"
      >

            <div className='modal-container'>
              <div className='title'>
                <h2>Book a Viewing</h2>
                <div className='title-icon'><MdOutlineAddHomeWork /></div>
              </div>
                  
              <div className='address'>
                <p>{property?.address?.city}</p>
                <p>more about the address</p>
              </div>

              <div className='form-container'>
                <div className='form-container-left'>
                  <div className='small-box'>
                    <h4>Name</h4>
                    <input placeholder='Enter your name' />
                  </div>
                  

                  <div className='small-box'>
                    <h4>Email</h4>
                    <input placeholder='Enter your email address' />
                  </div>
                  

                  <div className='small-box'>
                    <h4>Phone Number</h4>
                    <input placeholder='Enter your phone number' />
                  </div>
                </div>
                
                <div className='form-container-right'>
                  <div className='small-box'>
                    <h4>Message</h4>
                    <input placeholder='Enter your message' />
                  </div>
                  
                  <button className='submit-btn'>Submit</button>
                </div>
              </div>
            </div>
      </Modal>      

    </div>

  )
}

export default CityInfoBox