import { WeatherData } from "../functions/useWeatherStore";

function WeatherCard({ data }: { data: WeatherData }) {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <div className="weather-result">
      <div className={`main-weather ${data.weather[0].main}`}>
        <div className="left-main-weather">
          <h1 className="country-city-name">
            {data.name}, {data.sys.country}
          </h1>
          <p className="date">{date}</p>
        </div>
        <div className="right-main-weather">
          <h2 className="temp-name">Temp: {data.main.temp}°</h2>
          <p>Weather: {data.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather-img"
            className="weather-icon"
          ></img>
        </div>
      </div>
      <div className="other-weather">
        <div className="feels-temp">
          <p className="">Feel's like: {data.main.feels_like}°</p>
        </div>
        <div className="wind-speed">
          <p className="">Wind: {data.wind.speed} km/h</p>
        </div>
        <div className="humidity">
          <p className="">Humidity: {data.main.humidity}</p>
        </div>
        <div className="max-min-temp">
          <p>Max temp: {data.main.temp_max}</p>
          <p>Min temp: {data.main.temp_min}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;