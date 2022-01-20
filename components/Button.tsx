import React from "react";
import PropTypes from "prop-types";

import styles from "styles/Button.module.css";
import outlineStyles from "styles/ButtonOutline.module.css";

interface ButtonProps {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "disabled"
    | "transparent";
  size?: "nav" | "small" | "normal" | "medium" | "large";
  className?: string;
  outline?: boolean;
  round?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: ButtonProps) {
  const {
    color = "primary",
    size = "normal",
    className,
    outline,
    round,
    children,
    onClick,
  } = props;

  const stylesToUse = outline ? outlineStyles : styles;

  return (
    <button
      onClick={onClick}
      className={`${stylesToUse.button} ${stylesToUse[color]} ${
        stylesToUse[size]
      } ${outline ? stylesToUse.outline : ""} ${
        round ? stylesToUse.round : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
