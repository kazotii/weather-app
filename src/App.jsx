import {useEffect, useState} from "react";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";

function App(){
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("")
  const getWeather = async () => {
    try{
      setError("")
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setWeather(data);
    } 
    catch(error){
      setError("City not found")
      setWeather(null)
    }
  };

  useEffect(() => {
    if(city !== ""){
      getWeather();
    }
  }, []);

  return (
    <div className="weather-card">
      <h1 className="header-h1-text">How's the sky looking today?</h1>
      <Search setCity={setCity} getWeather={getWeather}/>
      {error !== "" && <h1 className="error">{error}</h1>}
      {weather !== null && <WeatherCard data={weather} />}
    </div>
  );
}
export default App;