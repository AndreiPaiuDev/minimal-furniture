import { useState } from 'react';
import styles from './BestSellers.module.css';
import Card05 from "../../../assets/Card05.jpg";
import Card06 from "../../../assets/Card06.jpg";
import Card07 from "../../../assets/Card07.jpg";
import Card08 from "../../../assets/Card08.jpg";
import Card09 from "../../../assets/Card09.jpg";
import ScrollReveal from "../../shared/ScrollReveal";

const products = [
    {
        id: 'platform-bed',
        img: Card05,
        alt: 'The modern platform bed',
        description: 'The modern platform bed',
        price: '750$',
    },
    {
        id: 'cozy-lounge-chair',
        img: Card06,
        alt: 'The Cozy Lounge Chair',
        description: 'The Cozy Lounge Chair',
        price: '230$',
    },
    {
        id: 'industrial-accent-chair',
        img: Card07,
        alt: 'The industrial accent chair',
        description: 'The industrial accent chair',
        price: '250$',
    },
    {
        id: 'sleek-stand',
        img: Card08,
        alt: 'The sleek stand',
        description: 'The sleek stand',
        price: '300$',
    },
    {
        id: 'minimalist-sofa',
        img: Card09,
        alt: 'The minimalist sofa',
        description: 'The minimalist sofa',
        price: '650$',
    },
];

export default function BestSellers() {
    const [featuredProductId, setFeaturedProductId] = useState(products[0].id);
    const featuredProduct = products.find((product) => product.id === featuredProductId);
    const smallProducts = products
        .filter((product) => product.id !== featuredProductId)
        .sort((firstProduct, secondProduct) => parseInt(firstProduct.price) - parseInt(secondProduct.price));

    return (
        <section className={styles.bestSellers} id="bestsellers">
          <ScrollReveal>
            <div className={styles.container}>
                <h2>Best Sellers</h2>
                <div className={styles.cards}>
                    <div className={styles.featuredCard} key={featuredProduct.id}>
                        <img src={featuredProduct.img} alt={featuredProduct.alt} className={styles.image}/>
                        <p className={styles.description}>{featuredProduct.description}</p>
                        <p className={styles.price}>{featuredProduct.price}</p>
                    </div>
                    <div className={styles.productList}>
                        {smallProducts.map((product) => (
                            <button
                                className={styles.productItem}
                                key={product.id}
                                type="button"
                                onClick={() => setFeaturedProductId(product.id)}
                                aria-label={`Show ${product.description} as featured best seller`}
                            >
                                <img src={product.img} alt={product.alt} className={styles.images}/>
                                <p className={styles.description}>{product.description}</p>
                                <p className={styles.price}>{product.price}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
          </ScrollReveal>
        </section>
    )
}
