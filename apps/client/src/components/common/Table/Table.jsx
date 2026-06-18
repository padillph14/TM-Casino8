import React from 'react';
import styles from './Table.module.css';

const Table = ({ 
  columns, 
  data, 
  className = '',
  hoverable = true,
  striped = true,
  compact = false,
  ...props 
}) => {
  const tableClasses = [
    styles.table,
    hoverable && styles.hoverable,
    striped && styles.striped,
    compact && styles.compact,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.wrapper}>
      <table className={tableClasses} {...props}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className={styles.header}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;