import React, { useState, useEffect } from 'react';
import axios from 'axios';
import iconoClima from './iconoClima';
import '../Clima/StyleClima.css';

const Clima = () => {
    const URLBASE = 'https://api.openweathermap.org/data/2.5/weather';
    const APIKEY = '856cf4ee8279fe08b25156fb7c011884';
    const CIUDAD = 'tucuman';
    const URL = `${URLBASE}?q=${CIUDAD}&lang=es&units=metric&appid=${APIKEY}`;
    const [climaData, setClimaData] = useState({
    city: '',
    temperature: '',
    status: '',
    humedad: '',
    icon: '',
    });

    async function getClima() {
    try {
    const response = await axios.get(URL);
    const clima = response.data;

    setClimaData({
        city: clima.name,
        temperature: clima.main.temp,
        humedad: clima.main.humidity,
        status: clima.weather[0].description,
        icon: clima.weather[0].main,
    });
    } catch (error) {
        console.log(error);
    }
    }
    useEffect(() => {
    getClima();
    }, []);


    return (
        <>
        <div className='card'>
            <div className='card-container'>
            <h2>El tiempor en: {climaData.city} </h2>
            <p> La temperatura actual es de: {climaData.temperature}°C</p>
            <p>El cielo esta: {climaData.status}</p>
            <p>Humedad: {climaData.humedad}%</p>
            <img className='iconMG w-25' src={iconoClima(climaData.icon)} alt="icono del clima" />
            </div>
        </div>
        </>

    )
}

export default Clima