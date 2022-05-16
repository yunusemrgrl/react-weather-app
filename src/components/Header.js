import { useWeather } from '../Context/WeatherContext';
function Header() {
  const { city } = useWeather();
  return (
    <div>
      <h1>{city.name} Haftalık Hava Durumu</h1>
    </div>
  );
}

export default Header;
