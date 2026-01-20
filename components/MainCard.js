export const MainCard = ({ city, weatherData }) => {
  return (
    <div>
      <h1>{city}</h1>
      <h2>{Math.round(weatherData.temperature)}°C</h2>
      <p>Vent : {Math.round(weatherData.windspeed)} km/h</p>
      <p>Direction : {weatherData.winddirection}°</p>
      <p>Heure : {weatherData.time}</p>
    </div>
  );
};