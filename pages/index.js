import { useEffect, useState } from "react";
import { MainCard } from "../components/MainCard";
import { LoadingScreen } from "../components/LoadingScreen";
import { MetricsCard } from "../components/MetricsCard";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = () => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(() => {
      fetchWeather();
    }, 1000 * 60 * 60); // 1 heure

    return () => clearInterval(interval);
  }, []);

  return weatherData ? (
    <div className="pageWrapper">
      <MainCard city={weatherData.city} weatherData={weatherData} />
      <MetricsCard weatherData={weatherData} />
    </div>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );    
}