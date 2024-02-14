import React from "react";
import {useWeather} from "../context/Weather"

//sets search city in context
const Input = () => {
    const weather = useWeather();
    // console.log("Weather", weather);

    return (
        <input 
        className="input-field" 
        value={weather.searchCity}
        placeholder="Search here"
        onChange={(e) => weather.setSearchCity(e.target.value)}
        />
    )
};

export default Input;