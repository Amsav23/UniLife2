// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SeeAllCities from './Pages/SeeAllCities/SeeAllCities'
import CityDetails from './Pages/CityDetails/CityDetails'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allcities' element={<SeeAllCities />} />
        <Route path='/citydetails/:cityId' element={<CityDetails />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
