import React from 'react'
import '../pages/StyleHomeScreen.css'
import Footer from '../Components/Footer/Footer'
import Clima from '../Components/Clima/Clima'

const HomeScreen = () => {
  return (
    <>
    <div className='homePage'>
        <h1>
        HomeScreen
        </h1>
        <Clima/>
        <Footer/>

    </div>
    </>
  )
}

export default HomeScreen