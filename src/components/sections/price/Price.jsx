import styles from "./Price.module.css";
import ScrollReveal from "../../shared/ScrollReveal";

export default function Price() {
  return (
    <section className={styles.price} id="prices">
      <ScrollReveal>
        <div className={styles.container}>
            <h2>Prices</h2>
            <ul>
                <li className={styles.listItem}>
                    <h3 className={styles.listTitle}>Chairs</h3>
                    <p className={styles.listDescription}>from 200$</p>
                </li>
                <li className={styles.listItem}>
                    <h3 className={styles.listTitle}>Tables</h3>
                    <p className={styles.listDescription}>from 250$</p>
                </li>
                <li className={styles.listItem}>
                    <h3 className={styles.listTitle}>Dressers</h3>
                    <p className={styles.listDescription}>from 300$</p>
                </li>
                <li className={styles.listItem}>
                    <h3 className={styles.listTitle}>Sofas</h3>
                    <p className={styles.listDescription}>from 500$</p>
                </li>
            </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}