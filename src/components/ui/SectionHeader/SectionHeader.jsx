// src/components/ui/SectionHeader/SectionHeader.jsx
import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";

/**
 * Consistent section heading block used across all pages.
 * @param {{ tag: string, title: string, subtitle?: string }} props
 */
export function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.tag}>{tag}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} />
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  );
}

SectionHeader.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
