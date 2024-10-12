import axios from 'axios'
import React, { useEffect } from 'react'


interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: Array<{
        description: string;
    }>;
}

interface WeatherAPICallProps{
    city: string;
    onDataFound: (data: WeatherData | null, error: string | null)=>void
}

export const WeatherAPICall: React.FC<WeatherAPICallProps> = ({city,  onDataFound}) => {
    useEffect(()=>{
     const fetchWeather= async ()=>{
        if(!city) return;
        try {
            const response = await axios.get('http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={b2608b601ab784f56d9294ac52317a8f}');
            onDataFound(response.data, null);
        } catch (error) {
            onDataFound(null, 'City not found')
        }
       
    }
    fetchWeather();
    }, [city, onDataFound])
    
  return null;
}
