import { useState } from "react"
import { SearchField } from "./components/searchField/SearchField";
import { WeatherAPICall } from "./components/weatherAPICall/WeatherAPICall";

interface WeatherData {
  name: string;
  main: {
      temp: number;
  };
  weather: Array<{
      description: string;
  }>;
}

function App() {
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch=(city:string)=>{
    setCity(city);
  }

  const handleDataFound=(data: WeatherData | null, error: string | null)=>{
    if(error){
      setError(error);
      setWeatherData(null);
    }
    else{
      setWeatherData(data);
      setError('');
    }

  }

  return (
    <>
      <h1>Search Your City</h1>
      <SearchField onSearch={handleSearch} />
      <WeatherAPICall city={city} onDataFound={handleDataFound} />
      {}
    </>
  )
}

export default App
