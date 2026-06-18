import React, { useEffect, useState } from 'react';
import styles from './Notification.module.css';

const Notification = ({ 
  message, 
  type = 'info', 
  duration = 5000,
  onClose,
  position = 'top-right',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const notificationClasses = [
    styles.notification,
    styles[type],
    styles[position],
    isVisible ? styles.show : styles.hide,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={notificationClasses}>
      <div className={styles.content}>
        <div className={styles.icon}>
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'warning' && '⚠'}
          {type === 'info' && 'ℹ'}
        </div>
        <span className={styles.message}>{message}</span>
        <button className={styles.closeBtn} onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}>
          ×
        </button>
      </div>
      <div className={styles.progressBar} style={{ animationDuration: `${duration}ms` }} />
    </div>
  );
};

export default Notification;