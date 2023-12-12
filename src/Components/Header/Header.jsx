import React from 'react'
import './Header.css'
import unlifeHouseLogo from '../../assets/unlifeHouseLogo.png'
import { IoIosHeartEmpty } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <Link to='/' className='uniLife_logo'>
        <img src={unlifeHouseLogo} alt="UniLife Logo" />
        <h1>UniLife</h1>
      </Link>

      <div className='navBar-container'>
        <p className='navBar-icons'> <IoIosHeartEmpty /> Shortlist</p>
        <p className='navBar-icons'> <CiMail /> Contact Us</p>
      </div>
      
      
      
    </div>
  )
}

export default Header