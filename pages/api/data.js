import cityConfig from "../../config/city.json";

export default async function handler(req, res) {
  const { latitude, longitude, city } = cityConfig;

  // ⚡️ Ajout des paramètres hourly + daily
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,visibility&daily=sunrise,sunset&timezone=auto`
  );

  const data = await getWeatherData.json();
  const current = data.current_weather;

  // ⚡️ Transformation des données
  const weatherData = {
    city,
    temperature: current.temperature,
    windspeed: current.windspeed,
    winddirection: current.winddirection,
    time: current.time,

    humidity: data.hourly.relativehumidity_2m?.[0] ?? "N/A",
    visibility: data.hourly.visibility?.[0] ?? "N/A",
    sunrise: data.daily.sunrise?.[0] ?? "N/A",
    sunset: data.daily.sunset?.[0] ?? "N/A",
  };

  res.status(200).json(weatherData);
}