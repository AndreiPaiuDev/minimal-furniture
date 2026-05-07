import styles from "./Subscribe.module.css";
import Card10 from "../../../assets/Card10.jpg";
import ScrollReveal from "../../shared/ScrollReveal";

export default function Subscribe() {
  return (
    <section className={styles.subscribe} id="subscribe">
      <ScrollReveal>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.sectionTitle}>
                    <h2>Newsletter</h2>
                    <p>Every week we will send you new designs and information about sales.</p>
                </div>

                <form className={styles.form}>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <label className={styles.checkbox}>
                        <input type="checkbox" required />
                        Agree to subscribe to the newsletter
                    </label>
                    <button className={styles.button} type="submit">Send</button>
                </form>
            </div>
            <div className={styles.right}>
                <img
                src={Card10}
                alt="Sofa and table sofa"
                className={styles.image}
                />
            </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
