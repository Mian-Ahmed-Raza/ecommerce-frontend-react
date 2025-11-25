import PropTypes from 'prop-types';
import styles from './Loading.module.css';

export default function Loading({ fullScreen = false, size = 'medium' }) {
    const containerClass = fullScreen ? styles.fullScreen : styles.inline;
    const spinnerClass = `${styles.spinner} ${styles[size]}`;

    return (
        <div className={containerClass}>
            <div className={spinnerClass}></div>
            <p className={styles.text}>Loading...</p>
        </div>
    );
}

Loading.propTypes = {
    fullScreen: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};
