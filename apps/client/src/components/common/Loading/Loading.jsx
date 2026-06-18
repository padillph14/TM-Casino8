import React from 'react';
import styles from './Loading.module.css';

const Loading = ({ 
  size = 'medium', 
  color = '#FFD700',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const spinnerClasses = [
    styles.spinner,
    styles[size],
    className
  ].filter(Boolean).join(' ');

  const containerClasses = [
    styles.container,
    fullScreen && styles.fullScreen
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div className={spinnerClasses} style={{ borderColor: color, borderTopColor: 'transparent' }}>
        <div className={styles.innerSpinner} style={{ borderColor: color, borderTopColor: 'transparent' }}></div>
      </div>
      {text && <p className={styles.text} style={{ color }}>{text}</p>}
    </div>
  );
};

export default Loading;