import { create } from "zustand"

interface WeatherStore{
    city: string,
    weather: any | null,
    error: string | null,
    setCity: (city:string) => void,
    getWeather:() => void,
}

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
export const useWeatherStore = create<WeatherStore>((set, get) => ({
    city: "" ,
    weather: null,
    error: null,
    setCity: (newCity) => set({city:newCity}),
    getWeather: async () => {
    const currentCity = get().city
    try{
      set({error:""})
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric&`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      set({weather:data});
    } 
    catch(error){
      set({error:"City not found"})
      set({weather:null})
    }
  },
}))