import React from 'react'

const iconoClima = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='assets/icon/iconClima/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;    
        case 'Drizzle':
            icon='icons/drizzle.svg src/assets/icon/iconClima/clear-day.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='icons/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='icons/snowy.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            icon='icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            icon='icons/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;  
        case 'Fog':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;    
        case 'Haze':
            icon='icons/haze.svg'
            console.log('BRUMAS');
            break;   
        case 'Smoke':
            icon='icons/smoke.svg'
            console.log('HUMO');
            break;      
        default:
            icon='src/assets/icon/iconClima/clear-day.svg'
            console.log('LIMPIO');    
    }
    return icon

}

export default iconoClima