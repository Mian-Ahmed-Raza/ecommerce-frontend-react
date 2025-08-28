import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";

import shirt from '../../assets/product-imgs/grey t-shirt.jpg';
import right from '../../assets/product-imgs/expand_right.png';
import check from '../../assets/product-imgs/check.png';
import dot from '../../assets/product-imgs/Dot.png';
import rating from '../../assets/product-imgs/rating.png';
import message from '../../assets/product-imgs/message.png'
import basket from '../../assets/product-imgs/shopping_basket.png'
import germany from '../../assets/product-imgs/germany.png'
import verified from '../../assets/product-imgs/verified.svg'
import world from '../../assets/product-imgs/world.svg'


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

                                <img src={rating} alt="rating" />
                                <span>{Product.rating}</span>

                            </div>

                            <img src={dot} alt="Dot" />

                            <div className={styles.reviews}>

                                <img src={message} alt="message" />
                                <span>{Product.reviews} reviews</span>

                            </div>

                            <img src={dot} alt="Dot" />

                            <div className={styles.sold}>

                                <img src={basket} alt="basket" />
                                <span>{Product.sold} sold</span>

                            </div>

                        </div>

                        
                        <div className={styles.pricing}>

                            <div className={styles.price}>
                                <span>{Product.price1}</span>
                                <span>50-100 pcs</span>
                            </div>

                            <div className={styles.price}>
                                <span>{Product.price2}</span>
                                <span>100-700 pcs</span>
                            </div>

                            <div className={styles.price}>
                                <span>{Product.price3}</span>
                                <span>700+ pcs</span>
                            </div>

                        </div>


                        <div className={styles.infoBox}>
                            <p className={styles.title}>Price:</p>
                            <span className={styles.span}>Negotiable</span>
                        </div>

                        <hr />

                        <div className={styles.infoBox}>
                            <p className={styles.title}>Type:</p>
                            <span className={styles.span}>Classic {Product.type}</span>
                        </div>

                        <div className={styles.infoBox}>
                            <p className={styles.title}>Material:</p>
                            <span className={styles.span}>{Product.material} material</span>
                        </div>

                        <div className={styles.infoBox}>
                            <p className={styles.title}>Design:</p>
                            <span className={styles.span}>Modern Nice</span>
                        </div>

                        <hr />

                        <div className={styles.infoBox}>
                            <p className={styles.title}>Customization:</p>
                            <span className={styles.span}>Customized logo and design custom packages</span>
                        </div>

                        <div className={styles.infoBox}>
                            <p className={styles.title}>Protection:</p>
                            <span className={styles.span}>Refund Policy</span>
                        </div>

                        <div className={styles.infoBox}>
                            <p className={styles.title}>Warranty:</p>
                            <span className={styles.span}>2 years full warranty</span>
                        </div>

                        <hr />


                    </div>

                    <div className={styles.seller}>

                        <div className={styles.header}>

                            <p className={styles.icon}>A</p>

                            <div className={styles.name}>
                                <p>Supplier</p>
                                <p>Gajnoi Trading LLC</p>
                            </div>

                        </div>

                        <hr />

                        <div className={styles.info}>
                            <img src={germany} alt="Germany" height={'15px'}/>
                            <p>Germany, Berlin</p>
                        </div>

                        <div className={styles.info}>
                            <img src={verified} alt="verified" />
                            <p>Verified Seller</p>
                        </div>

                        <div className={styles.info}>
                            <img src={world} alt="world" />
                            <p>Worldwide Shipping</p>
                        </div>

                        <button type="button">Send inquiry</button>

                        <button type="button">Seller's profile</button>

                    </div>


                </div>


            </section>


            <Footer />
        </>


    )


}