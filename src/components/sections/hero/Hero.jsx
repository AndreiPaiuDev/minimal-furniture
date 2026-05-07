import styles from "./Hero.module.css";
import product01 from "../../../assets/product-01.png";
import product02 from "../../../assets/product-02.png";
import product03 from "../../../assets/product-03.png";
import ScrollReveal from "../../shared/ScrollReveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <ScrollReveal>
        <div className={styles.container}>
          <h1>MODERN AND MINIMALIST <br />FURNITURE FOR YOU</h1>

          <div className={styles.left}>
            <img src={product01} alt="" />
          </div>

        <div className={styles.center}>
          <img src={product02} alt="" />
        </div>

        <div className={styles.right}>
          <img src={product03} alt="" />
          <div className={styles.card}>
            <p>Add a touch of elegance to your space with handcrafted furniture pieces</p>
            <button className={styles.button}>Subscribe</button>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}