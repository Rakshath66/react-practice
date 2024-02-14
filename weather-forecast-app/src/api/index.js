const baseURL = "https://api.weatherapi.com/v1/current.json?key=ddff3ae1b2f04dd1a82100407232512";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWeatherDataForLocation = async (lat, long) => {
    const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    return await response.json();
}