import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../Clima/StyleClima.css'


const Clima = () => {
    const URLBASE= 'https://api.openweathermap.org/data/2.5/weather';
    const APIKEY= '856cf4ee8279fe08b25156fb7c011884';
    const CIUDAD= 'tucuman';
    const URL= `${URLBASE}?q=${CIUDAD}&lang=es&units=metric&appid=${APIKEY}`;
    const [icon, setIcon] = useState('')
    const [CYTY, setCYTY] = useState('')
    const [TEMPERATURE, setTEMPERATURE] = useState('')
    const [STATUS, setSTATUS] = useState('')
    const [humedad, setHumedad] = useState('')
  

    async function getClima() {
    try {
        const response = await axios.get(URL);
        const Clima= response.data;
        console.log(Clima)
        setCYTY(await Clima.name);
        setTEMPERATURE (await Clima.main.temp);
        setHumedad (await Clima.main.humidity);
        setSTATUS (await Clima.weather[0].description);
        setIcon (await Clima.weather[0].icon)
    } catch (error) {
        console.log(error)
        
    }
    }
    getClima();

    return (
        <>
        <div className='card'>
            <div className='card-container'>
            <h2>El tiempor en: {CYTY} </h2>
            <p> La temperatura actual es de: {TEMPERATURE}°C</p>
            <p>El cielo esta: {STATUS}</p>
            <p>Humedad: {humedad}%</p>
            <img className='iconMG' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icono del clima" />
            </div>
        </div>
        <div></div>
        
        </>

    )
}

export default Clima