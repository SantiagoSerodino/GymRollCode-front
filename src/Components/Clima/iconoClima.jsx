import React from 'react'

const iconoClima = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='./src/assets/icon/iconClima/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;    
        case 'Drizzle':
            icon='./src/assets/icon/iconClima/clear-day.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='./src/assets/icon/iconClima/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='./src/assets/icon/iconClima/snowy.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            icon='./src/assets/icon/iconClima/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            icon='./src/assets/icon/iconClima/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            icon='./src/assets/icon/iconClima/fog.svg'
            console.log('NUBES');
            break;  
        case 'Fog':
            icon='./src/assets/icon/iconClima/fog.svg'
            console.log('NUBES');
            break;    
        case 'Haze':
            icon='./src/assets/icon/iconClima/haze.svg'
            console.log('BRUMAS');
            break;   
        case 'Smoke':
            icon='./src/assets/icon/iconClima/smoke.svg'
            console.log('HUMO');
            break;      
        default:
            icon='./src/assets/icon/iconClima/clear-day.svg'
            console.log('LIMPIO');    
    }
    return icon

}

export default iconoClima