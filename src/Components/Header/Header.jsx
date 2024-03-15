import React from 'react'
import './Header.css'
import unlifeHouseLogo from '../../assets/unlifeHouseLogo.png'
import { IoIosHeartEmpty } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom'
import Modal from 'react-modal';

function Header() {

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
  Modal.setAppElement(document.getElementById("#root"))

  //create state to Control my Modal
  const [isOpen, setIsOpen] = React.useState(false)



  return (
    <div className='header-container'>
      <Link to='/' className='uniLife_logo'>
        <img src={unlifeHouseLogo} alt="UniLife Logo" />
        <h1>UniLife</h1>
      </Link>

      <div className='navBar-container'>
        <p className='navBar-icons'> <IoIosHeartEmpty /> Shortlist</p>
        <p className='navBar-icons' onClick={()=>setIsOpen(true)}><CiMail />Contact Us</p>
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
                <p>Home Icon</p>
              </div>
                  
              <p className='address'>Holmes Camden, etc address</p>
              <p className='address'>more about the address</p>

                  <div className='form-container'>
                    
                    <div className='form-container-left'>
                      <h4>Name</h4>
                      <input placeholder='Enter your name' />

                      <h4>Email</h4>
                      <input placeholder='Enter your email address' />

                      <h4>Phone Number</h4>
                      <input placeholder='Enter your phone number' />
                    </div>
                    
                    <div className='form-container-right'>
                      <h4>Message</h4>
                      <input placeholder='Enter your message' />

                      <button className='submit-btn'>Submit</button>
                    </div>
                    
                  </div>
              </div>

      </Modal>
      
    </div>
  )
}

export default Header