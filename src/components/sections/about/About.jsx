import styles from "./About.module.css";
import product04 from "../../../assets/product-04.png";
import ScrollReveal from "../../shared/ScrollReveal";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <ScrollReveal>
        <div className={styles.container}>
          <div className={styles.left}>

            <div className={styles.sectionTitle}>
                <div className={styles.line}></div>
                <p>About us</p>
            </div>
          <h2 className={styles.title}>
            Our сraftsmanship: сreating unique handmade furniture
          </h2>
          <p className={styles.description}>
            Discover the inspiration behind our modern and minimalist designs,
            and see how we bring them to life through our skilled craftsmanship.
          </p>

          <ul className={styles.list}>
            <li>
                <h3 className={styles.listTitle}>5+</h3>
                <p className={styles.listDescription}>Years of experience creating handcrafted furniture</p>
            </li>
            <li>
                <h3 className={styles.listTitle}>100+</h3>
                <p className={styles.listDescription}>Sustainably sourced materials used in all of our furniture </p>
            </li>
            <li>
                <h3 className={styles.listTitle}>500+</h3>
                <p className={styles.listDescription}>Unique furniture designs crafted by our skilled artisans</p>
            </li>
          </ul>
        </div>
        <img
          src={product04}
          alt="Handmade furniture"
          className={styles.image}
        />
      </div>
      </ScrollReveal>
    </section>
  );
}
