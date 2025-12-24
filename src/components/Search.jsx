function Search({setCity, getWeather}){
    return(
    <div className="search-input-button">
        <form className="search-form" onSubmit={(event) => {event.preventDefault(); getWeather()}}>
            <input
            className="search-input"
            type="text" 
            onChange={(event) => setCity(event.target.value)} 
            placeholder="Enter your city..."/>
            <button className="search-button" onClick={getWeather}>Search</button>
        </form>
    </div>
    )
}
export default Search