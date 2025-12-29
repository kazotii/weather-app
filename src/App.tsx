import {useEffect, useState} from "react";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import { useWeatherStore } from "./useWeatherStore";

function App(){
  const weather = useWeatherStore((state) => state.weather);
  const error = useWeatherStore((state) => state.error)
  return (
    <div className="weather-card">
      <h1 className="header-h1-text">How's the sky looking today?</h1>
      <Search />
      {error !== "" && <h1 className="error">{error}</h1>}
      {weather !== null && <WeatherCard data={weather} />}
    </div>
  );
}
export default App;