import styles from './OurProducts.module.css';
import { useEffect, useState } from "react";
import ScrollReveal from "../../shared/ScrollReveal";
import Card01 from "../../../assets/Card01.jpg";
import Card02 from "../../../assets/Card02.jpg";
import Card03 from "../../../assets/Card03.jpg";
import Card04 from "../../../assets/Card04.jpg";
import Card05 from "../../../assets/Card05.jpg";
import Card06 from "../../../assets/Card06.jpg";
import Card07 from "../../../assets/Card07.jpg";
import Card08 from "../../../assets/Card08.jpg";
import Card09 from "../../../assets/Card09.jpg";

const products = [
  { img: Card01, text: "Minimalist storage solutions" },
  { img: Card02, text: "Handcrafted minimalist seating" },
  { img: Card03, text: "Sleek and simple tables" },
  { img: Card04, text: "Elegant minimalist lighting" },
  { img: Card05, text: "The modern platform bed" },
  { img: Card06, text: "The Cozy Lounge Chair" },
  { img: Card07, text: "The industrial accent chair" },
  { img: Card08, text: "The sleek stand" },
  { img: Card09, text: "The minimalist sofa" },
];

export default function OurProducts() {
  const [index, setIndex] = useState(0);

  const visibleItems = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.ourProducts} id="products">
      <ScrollReveal>
        <div className={styles.container}>
          <h2>Our Products</h2>

          <div className={styles.carouselWrapper}>
          <ul
            className={styles.productList}
            style={{
              transform: `translateX(-${index * (313 + 24)}px)`
            }}
          >
            {[...products, ...products].map((item, i) => (
              <li key={i}>
                <img src={item.img} alt={item.text} className={styles.images} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}