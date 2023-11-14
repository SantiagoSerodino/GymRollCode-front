import React from 'react'

const iconoClima = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='./src/assets/icon/iconClima/thunderstorms-rain.svg'
            break;    
        case 'Drizzle':
            icon='./src/assets/icon/iconClima/clear-day.svg'
            break;
        case 'Rain':
            icon='./src/assets/icon/iconClima/rain.svg'
            break;
        case 'Snow':
            icon='./src/assets/icon/iconClima/snowy.svg'
            break;                        
        case 'Clear':
            icon='./src/assets/icon/iconClima/clear-day.svg'
            break;
        case 'Atmosphere':
            icon='./src/assets/icon/iconClima/weather.svg'
            break;  
        case 'Clouds':
            icon='./src/assets/icon/iconClima/fog.svg'
            break;  
        case 'Fog':
            icon='./src/assets/icon/iconClima/fog.svg'
            break;    
        case 'Haze':
            icon='./src/assets/icon/iconClima/haze.svg'
            break;   
        case 'Smoke':
            icon='./src/assets/icon/iconClima/smoke.svg'
            break;      
        default:
            icon='./src/assets/icon/iconClima/clear-day.svg'
    }
    return icon

}

export default iconoClima