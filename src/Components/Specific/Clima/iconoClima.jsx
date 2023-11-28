import React from 'react'
import imgenThunderstorms from '../../../assets/icon/iconClima/thunderstorms-rain.svg'
import imgenfog from '../../../assets/icon/iconClima/fog.svg'
import imgenClearDay from '../../../assets/icon/iconClima/clear-day.svg'
import imgenrain from '../../../assets/icon/iconClima/rain.svg'
import imgenSnow from '../../../assets/icon/iconClima/snow.svg'
import imgenHaze from '../../../assets/icon/iconClima/haze.svg'
import imgenSmoke from '../../../assets/icon/iconClima/smoke.svg'

const iconoClima = (icon) => {
    let iconPath ='';
    
        switch (icon) {
            case 'Thunderstorm':
                iconPath = imgenThunderstorms
                break;    
            case 'Drizzle':
                iconPath = imgenClearDay
                break;
            case 'Rain':
                iconPath = imgenrain
                break;
            case 'Snow':
                iconPath = imgenSnowy
                break;                        
            case 'Clear':
                iconPath = imgenClearDay
                break;
            case 'Atmosphere':
                iconPath = imgenSnow
                break;  
            case 'Clouds':
                iconPath = imgenfog
                break;  
            case 'Fog':
                iconPath = imgenfog
                break;    
            case 'Haze':
                iconPath = imgenHaze
                break;   
            case 'Smoke':
                iconPath = imgenSmoke
                break;      
            default:
                iconPath = imgenClearDay
        }
        return iconPath


}

export default iconoClima