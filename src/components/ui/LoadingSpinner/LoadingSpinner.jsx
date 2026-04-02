// src/components/ui/LoadingSpinner/LoadingSpinner.jsx
import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={styles.wrap}>
      <div className={styles.ring} />
      <span className={styles.label}>Loading</span>
    </div>
  );
}
