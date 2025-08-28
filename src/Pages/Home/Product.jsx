import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";

import shirt from '../../assets/product-imgs/grey t-shirt.jpg';
import right from '../../assets/product-imgs/expand_right.png';
import check from '../../assets/product-imgs/check.png';
import dot from '../../assets/product-imgs/Dot.png';

export default function Product() {

    const { id } = useParams();

    const Products = [
        { id: 1, name: "Mens Half Sleeve T-Shirt Cotton Base Layer Slim Muscle", price1: "$19.99", price2: "$15.99", price3: "$13.99", rating: "4.7", reviews: "47", sold: "287", type: "Clothing", material: "Cotton", mainImage: shirt, cat1: "Clothing", cat2: "Men", cat3: "T-Shirts", inStock: true }
    ];

    const Product = Products.find((product) => product.id === parseInt(id));

    return (


        <>
            <Header />
            <Navbar />


            <div className={styles.subCats}>

                <span className={styles.cat}>Home</span>

                <img src={right} alt="right arrow" />

                <span className={styles.cat}>{Product.cat1}</span>

                <img src={right} alt="right arrow" />

                <span className={styles.cat}>{Product.cat2}</span>

                <img src={right} alt="right arrow" />

                <span className={styles.cat}>{Product.cat3}</span>

            </div>

            <section>


                <div className={styles.productSection}>


                    <div className={styles.productImages}>


                        <div className={styles.mainImage}>

                            <img src={Product.mainImage} alt={Product.name} height={"345px"}/>

                        </div>

                        <div className={styles.otherImages}>

                            <div className={styles.images}>
                                <img src={Product.mainImage} alt={Product.name} style={{ height: '48px' }} />
                            </div>

                            <div className={styles.images}>
                                <img src={Product.mainImage} alt={Product.name} style={{ height: '48px' }} />
                            </div>

                            <div className={styles.images}>
                                <img src={Product.mainImage} alt={Product.name} style={{ height: '48px' }} />
                            </div>

                            <div className={styles.images}>
                                <img src={Product.mainImage} alt={Product.name} style={{ height: '48px' }} />
                            </div>

                            <div className={styles.images}>
                                <img src={Product.mainImage} alt={Product.name} style={{ height: '48px' }} />
                            </div>

                            <div className={styles.images}>
                                <img src={Product.mainImage} alt={Product.name} style={{ height: '48px' }} />
                            </div>

                        </div>


                    </div>

                    <div className={styles.productDetails}>



                        {
                            Product.inStock ?
                                (
                                    <div className={styles.inStock}>
                                        <img src={check} alt="tick" />
                                        <span>In Stock</span>
                                    </div>
                                )
                                :
                                (
                                    <div className={styles.outStock}>
                                        <span>Out of Stock</span>
                                    </div>
                                )
                        }

                        <h2 className={styles.productName}>
                            {Product.name}
                        </h2>

                        <div className={styles.info}>

                            <div className={styles.rating}>

                                

                            </div>

                            <img src={dot} alt="Dot" />

                            <div className={styles.reviews}>



                            </div>

                            <img src={dot} alt="Dot" />

                            <div className={styles.sold}>



                            </div>

                        </div>

                        


                    </div>

                    <div className={styles.seller}>



                    </div>


                </div>


            </section>


            <Footer />
        </>


    )


}