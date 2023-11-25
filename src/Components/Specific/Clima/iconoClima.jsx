import React from 'react'

const iconoClima = (icon) => {
    let iconPath ='';
    
        switch (icon) {
            case 'Thunderstorm':
                iconPath='../src/assets/icon/iconClima/thunderstorms-rain.svg'
                break;    
            case 'Drizzle':
                iconPath='../src/assets/icon/iconClima/clear-day.svg'
                break;
            case 'Rain':
                iconPath='../src/assets/icon/iconClima/rain.svg'
                break;
            case 'Snow':
                iconPath='../src/assets/icon/iconClima/snowy.svg'
                break;                        
            case 'Clear':
                iconPath='../src/assets/icon/iconClima/clear-day.svg'
                break;
            case 'Atmosphere':
                iconPath='../src/assets/icon/iconClima/fog.svg'
                break;  
            case 'Clouds':
                iconPath='../src/assets/icon/iconClima/fog.svg'
                break;  
            case 'Fog':
                iconPath='../src/assets/icon/iconClima/fog.svg'
                break;    
            case 'Haze':
                iconPath='../src/assets/icon/iconClima/haze.svg'
                break;   
            case 'Smoke':
                iconPath='../src/assets/icon/iconClima/smoke.svg'
                break;      
            default:
                iconPath='../src/assets/icon/iconClima/clear-day.svg'
        }
        return iconPath


}

export default iconoClima