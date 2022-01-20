import React from "react";

import styles from "styles/TextInput.module.css";

interface TextInputProps {
  type: React.HTMLInputTypeAttribute;
  outline?: boolean;
  placeholder?: string;
}

function TextInput(props: TextInputProps) {
  const { outline, type, placeholder, ...rest } = props;

  return (
    <input
      type={type}
      className={`${styles.input} ${outline ? styles.outline : styles.normal}`}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default TextInput;
