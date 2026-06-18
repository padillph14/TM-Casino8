import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  title, 
  subtitle,
  className = '',
  hoverable = false,
  onClick,
  ...props 
}) => {
  const cardClasses = [
    styles.card,
    hoverable && styles.hoverable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {title && (
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
};

export default Card;