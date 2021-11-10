import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Container from './components/Container';
import ThemeProvider from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
