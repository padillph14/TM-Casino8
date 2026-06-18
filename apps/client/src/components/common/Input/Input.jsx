import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ 
  label,
  error,
  icon,
  className = '',
  fullWidth = false,
  variant = 'default',
  ...props 
}, ref) => {
  const inputClasses = [
    styles.input,
    styles[variant],
    error && styles.error,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;