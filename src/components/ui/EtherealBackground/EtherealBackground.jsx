// src/components/ui/EtherealBackground/EtherealBackground.jsx
import styles from "./EtherealBackground.module.css";

/**
 * Ethereal Shadow background — animated ambient orbs
 * Inspired by: 21st.dev/community/components/jatin-yadav05/etheral-shadow
 */
export function EtherealBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
    </div>
  );
}
