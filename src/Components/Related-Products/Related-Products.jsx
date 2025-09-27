import styles from './Related-Products.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Items from './Items.jsx';

import wallet from '../../assets/product-imgs/wallet.png';
import watch from '../../assets/product-imgs/watch.png';
import headphone from '../../assets/product-imgs/headphone.png';
import shorts from '../../assets/product-imgs/shorts.png';
import kettle from '../../assets/product-imgs/kettle.png';
import tockri from '../../assets/product-imgs/tockri.png';

export default function RelatedProducts() {

    return (


        <section className={styles.relatedProducts}>

            <h2>Related Products</h2>

            <div className={styles.items}>

                <Items
                    image={wallet}
                    name="Leather Wallet"
                    price="$49.99-$59.99"
                />

                <Items
                    image={watch}
                    name="Smart Watch"
                    price="$199.99-$249.99"
                />

                <Items
                    image={headphone}
                    name="Wireless Headphone"
                    price="$89.99-$129.99"
                />

                <Items
                    image={shorts}
                    name="Casual Shorts"
                    price="$29.99-$39.99"
                />

                <Items
                    image={kettle}
                    name="Electric Kettle"
                    price="$39.99-$49.99"
                />

                <Items
                    image={tockri}
                    name="Wooden Tockri Bag"
                    price="$19.99-$29.99"
                />

            </div>

        </section>


    )

}