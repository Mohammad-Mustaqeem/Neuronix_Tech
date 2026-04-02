// src/components/layout/Footer/Footer.jsx
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        Neuronix<span>/</span>
      </div>
      <p className={styles.copy}>© 2025 Neuronix Technology. All rights reserved.</p>
      <nav className={styles.links}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/about" className={styles.link}>About</NavLink>
        <NavLink to="/contact" className={styles.link}>Contact</NavLink>
      </nav>
    </footer>
  );
}
