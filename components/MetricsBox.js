import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ icon, label, value }) => {
  return (
    <div className={styles.box}>
      <img src={icon} alt={label} className={styles.icon} />
      <div>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};