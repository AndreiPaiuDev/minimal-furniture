import styles from './Footer.module.css';
import logo from '../../../assets/LOGO.svg';
import facebookIcon from '../../../assets/FB.svg';
import instagramIcon from '../../../assets/IG.svg';
import youtubeIcon from '../../../assets/YB.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.brand}>
                        <a href="#top" className={styles.logoLink} aria-label="Minimal home">
                            <img src={logo} alt="Minimal" className={styles.logo} />
                        </a>
                        <address className={styles.address}>
                            Obolonsky Prospect, 14, Kyiv
                        </address>
                        <p>Daily 10:00-21:00</p>
                    </div>

                    <div className={styles.footerInfo}>
                        <nav className={styles.nav} aria-label="Footer navigation">
                            <a href="#about">About us</a>
                            <a href="#products">Our products</a>
                            <a href="#prices">Prices</a>
                            <a href="#bestsellers">Bestsellers</a>
                            <a href="#reviews">Reviews</a>
                        </nav>

                        <div className={styles.contacts}>
                            <a href="tel:+380669384758">+380669384758</a>
                            <a href="mailto:minimal.furniture@gmail.com">minimal.furniture@gmail.com</a>
                            <a href="tel:+380679384758">+380679384758</a>
                        </div>
                    </div>

                    <div className={styles.socials} aria-label="Social links">
                        <a href="https://www.facebook.com/" aria-label="Facebook">
                            <img src={facebookIcon} alt="" />
                        </a>
                        <a href="https://www.instagram.com/" aria-label="Instagram">
                            <img src={instagramIcon} alt="" />
                        </a>
                        <a href="https://www.youtube.com/" aria-label="YouTube">
                            <img src={youtubeIcon} alt="" />
                        </a>
                    </div>
                </div>

                <p className={styles.legal}>
                    By using this website, you agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
}
