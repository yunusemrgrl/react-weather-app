import Container from './components/Container';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;
