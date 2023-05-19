import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  children,
  "aria-label": ariaLabel,
  onClick,
  theme = "primary",
  className = "",
}: ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles.btn} ${styles[`btn-${theme}`]} ${className}`}
    >
      {children}
    </button>
  );
};
