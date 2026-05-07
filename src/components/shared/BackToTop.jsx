import { useEffect, useState } from 'react';
import styles from './BackToTop.module.css';
import topIcon from '../../assets/top.svg';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`${styles.button} ${isVisible ? styles.visible : ''}`}
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <img src={topIcon} alt="" className={styles.icon} />
        </button>
    );
}
