// src/components/layout/Header/Header.jsx
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

/**
 * Site-wide navigation header.
 * Responsive: collapses to hamburger menu on mobile.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ""].join(" ")}>
      <NavLink to="/" className={styles.logo}>
        Neuronix<span>/</span>
      </NavLink>

      <nav className={[styles.nav, menuOpen ? styles.open : ""].join(" ")}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""].join(" ")
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""].join(" ")
          }
        >
          Contact
        </NavLink>
        <NavLink to="/contact">
          <Button variant="outline" size="sm">Get a Quote</Button>
        </NavLink>
      </nav>

      <button
        className={[styles.hamburger, menuOpen ? styles.hOpen : ""].join(" ")}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
