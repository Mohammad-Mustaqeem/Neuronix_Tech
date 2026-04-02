// src/components/ui/Button/Button.jsx
import PropTypes from "prop-types";
import styles from "./Button.module.css";

/**
 * Neuronix primary button component.
 * Inspired by: 21st.dev/community/components/abishek1512/button-1
 *
 * @param {{ variant?: "primary"|"outline"|"ghost", size?: "sm"|"md"|"lg", isLoading?: boolean, children: React.ReactNode }} props
 */
export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  onClick,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      className={[styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")}
      disabled={isLoading || rest.disabled}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
