import styles from "./Reviews.module.css";
import Avatar01 from "../../../assets/avatar01.jpg";
import Avatar02 from "../../../assets/avatar02.jpg";
import Avatar03 from "../../../assets/avatar03.jpg";
import ScrollReveal from "../../shared/ScrollReveal";

export default function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <ScrollReveal>
        <div className={styles.container}>
            <h2>Clients reviews</h2>
            <ul className={styles.reviewsList}>
                <li className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                        <img src={Avatar01} alt="Avatar" className={styles.avatar} />
                        <div className={styles.reviewUser}>
                            <h3 className={styles.userName}>Alexandra dream</h3>
                            <div className={styles.reviewDate}>1 weeks ago</div>
                        </div>
                    </div>
                   <p>I was blown away by the quality and craftsmanship of the furniture I received from this company. Each piece was unique and beautifully designed, and you can tell that a lot of thought and care goes into every detail.</p>
                </li>
                <li className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                        <img src={Avatar02} alt="Avatar" className={styles.avatar} />
                        <div className={styles.reviewUser}>
                            <h3 className={styles.userName}>James Williams</h3>
                            <div className={styles.reviewDate}>3 weeks ago</div>
                        </div>
                    </div>
                   <p>The "Minimal" furniture set is a fantastic addition to my home. It boasts a minimalist design, enhancing the feel and look of my living space. The sturdy construction is worth noting too, which speaks volumes about its durability.</p>
                </li>
                <li className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                        <img src={Avatar03} alt="Avatar" className={styles.avatar} />
                        <div className={styles.reviewUser}>
                            <h3 className={styles.userName}>Emily Watson</h3>
                            <div className={styles.reviewDate}>3 weeks ago</div>
                        </div>
                    </div>
                   <p>The "Minimal" furniture set has far exceeded my expectations. The sleek design combined with the high-quality materials have not only added an exceptional aesthetic to my space but also offered an uncompromising standard of comfort.</p>
                </li>
            </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}