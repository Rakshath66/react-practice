import { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
       //Get Current Location
       weather.fetchCurrentUserLocationData();
  }, [])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
