import { useWeather } from '../Context/WeatherContext';
function Header() {
  const { city } = useWeather();
  return (
    <div>
      <h1>{city.name} Daily Weather Forecast</h1>
    </div>
  );
}

export default Header;
