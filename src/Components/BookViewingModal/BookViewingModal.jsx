import React from 'react'
import './BookViewingModal.css'

function BookViewingModal() {
  return (
    <div className='modal-container'>
      <h2>Book a Viewing</h2>
      <p>insert Home Icon</p>

      <p>Holmes Camden, etc address</p>
      <p>more about the address</p>

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

          <button>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default BookViewingModal