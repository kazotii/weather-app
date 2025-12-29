import { useWeatherStore } from "../useWeatherStore";

function Search(){
    const setCity = useWeatherStore((state) => state.setCity)
    const city = useWeatherStore((state) => state.city)
    const getWeather = useWeatherStore((state) => state.getWeather)
    return(
    <div className="search-input-button">
        <form className="search-form" onSubmit={(event) => {event.preventDefault(); getWeather()}}>
            <input
            className="search-input"
            type="text" 
            value={city}
            onChange={(event) => setCity(event.target.value)} 
            placeholder="Enter your city..."/>
            <button className="search-button" onClick={getWeather}>Search</button>
        </form>
    </div>
    )
}
export default Search