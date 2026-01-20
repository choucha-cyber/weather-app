export const transformWeatherData = (data) => {
    const current = data.current_weather;
  
    return {
      temperature: current.temperature,
      windspeed: current.windspeed,
      winddirection: current.winddirection,
      time: current.time,
  
      humidity: data.hourly.relativehumidity_2m?.[0] ?? "N/A",
      visibility: data.hourly.visibility?.[0] ?? "N/A",
      sunrise: data.daily.sunrise?.[0] ?? "N/A",
      sunset: data.daily.sunset?.[0] ?? "N/A",
    };
  };  