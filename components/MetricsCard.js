import styles from "./MetricsCard.module.css";
import { MetricsBox } from "./MetricsBox";

export const MetricsCard = ({ weatherData }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <MetricsBox
          icon="/icons/wind.png"
          label="Wind"
          value={`${weatherData.windspeed} km/h`}
        />

        <MetricsBox
          icon="/icons/compass.png"
          label="Wind direction"
          value={`${weatherData.winddirection}°`}
        />

        <MetricsBox
          icon="/icons/humidity.png"
          label="Humidity"
          value={`${weatherData.humidity}%`}
        />

        <MetricsBox
          icon="/icons/binocular.png"
          label="Visibility"
          value={`${Math.round(weatherData.visibility / 1000)} km`}
        />

        <MetricsBox
          icon="/icons/sunrise.png"
          label="Sunrise"
          value={weatherData.sunrise}
        />

        <MetricsBox
          icon="/icons/sunset.png"
          label="Sunset"
          value={weatherData.sunset}
        />
      </div>
    </div>
  );
};