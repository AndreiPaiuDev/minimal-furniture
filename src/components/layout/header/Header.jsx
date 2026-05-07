import styles from "./Header.module.css";
import logo from "../../../assets/LOGO.svg";

export default function Header() {
  return (
    <header>
      <section className={styles.headerContainer}>
        <img src={logo} alt="Minimal Furniture Logo" />

        <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#prices">Prices</a>
            <a href="#reviews">Reviews</a>
            <a href="#subscribe">Newsletter</a>
        </nav>
      </section>
    </header>
  );
}