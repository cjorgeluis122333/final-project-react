import React from 'react';
import styles from './FloatingActionButton.module.css';

export const FloatingActionButton = ({ onClick }) => {
    return (
        <button className={styles.floatingButton} onClick={onClick} aria-label="Agregar">
            <span className={styles.plusIcon}>+</span>
        </button>
    );
};