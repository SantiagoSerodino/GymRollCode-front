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
        <div className='container card cardMG bg-dark-subtle' >
            <img className='icon' src={iconoClima(climaData.icon)} alt='icono del clima' />  
            <div className='card-body'>
                <h5 className='cityNameMG text-uppercase'> {climaData.city} </h5>
            </div>
            <ul className='list-group list-group-flush '>
                <li className='list-group-item bg-dark   text-white-50 text-uppercase'>Temperatura: {climaData.temperature}°C</li>
                <li className='list-group-item bg-dark   text-white-50 text-uppercase'>Humedad: {climaData.humedad}%</li>
                <li className='list-group-item bg-dark   text-white-50 text-uppercase'>Estado de clima: {climaData.status}</li>
            </ul>
        </div>


        </>

    )
}

export default Clima