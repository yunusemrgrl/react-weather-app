import axios from 'axios';
import { useEffect } from 'react';
import { useWeather } from '../Context/WeatherContext';
function DaysCard() {
  const { days, weather, setWeather, city } = useWeather();
  useEffect(() => {
    const api_key = 'ff1f28f9491f246a408b000902acf985';
    const getData = async () => {
      const res = axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`,
      );
      setWeather((await res).data.daily);
    };
    getData();
  }, [city, setWeather]);
  return (
    <>
      {weather.map((item, i) => {
        return (
          <div className="single-user" key={i}>
            <div className="content-card">
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />

              <div className="single-item-text">
                <p>
                  {days[new Date(item.dt * 1000).getDay()]}
                </p>
                <p>{item.weather[0].description}</p>
                <p>
                  {Math.round(item.temp['max'] - 273.15)}/
                  {Math.round(item.temp['min'] - 273.15)}
                  &deg;C
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DaysCard;
