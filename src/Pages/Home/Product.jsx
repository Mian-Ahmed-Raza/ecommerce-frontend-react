import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";

import shirt from '../../assets/product-imgs/grey t-shirt.jpg';
import brownCoat from '../../assets/home-img/brown coat.png';
import blazzer from '../../assets/home-img/blazer.png';
import wallet from '../../assets/home-img/wallet.png';
import bag from '../../assets/home-img/bag.png';
import shorts from '../../assets/home-img/shorts.png';
import simpleHeadphone from '../../assets/home-img/simple headphone.png';
import pot from '../../assets/home-img/pot.png';
import kettle from '../../assets/home-img/kettle.png';

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
        {
            id: 1,
            name: "Mens Half Sleeve T-Shirt Cotton Base Layer Slim Muscle",
            price1: "$10.33", 
            price2: "$8.99", 
            price3: "$6.99", 
            rating: "4.7", 
            reviews: "47", 
            sold: "287", 
            type: "Clothing", 
            material: "Cotton", 
            mainImage: shirt, 
            cat1: "Clothing", 
            cat2: "Men", 
            cat3: "T-Shirts", 
            inStock: true
        },

        {
            id: 2,
            name: "Mens Brown Winter Coat All Sizes pure soft",
            price1: "$25.50", 
            price2: "$22.99", 
            price3: "$20.99", 
            rating: "4.9", 
            reviews: "101", 
            sold: "531", 
            type: "Clothing", 
            material: "Wool", 
            mainImage: brownCoat, 
            cat1: "Clothing", 
            cat2: "Men", 
            cat3: "Winter Clothing", 
            inStock: true
        },

        {
            id: 3,
            name: "Mens Stylish blazers multicolors all weather Good Quality",
            price1: "$30.00", 
            price2: "$27.99", 
            price3: "$25.99", 
            rating: "4.3", 
            reviews: "231", 
            sold: "799", 
            type: "Clothing", 
            material: "Wool, Cotton", 
            mainImage: blazzer, 
            cat1: "Clothing", 
            cat2: "Men", 
            cat3: "Formal", 
            inStock: true
        },

        {
            id: 4,
            name: "Mens Pure Leather Wallet Standard Pocket Size with multiple pockets",
            price1: "$15.00", 
            price2: "$13.99", 
            price3: "$11.99", 
            rating: "4.1", 
            reviews: "101", 
            sold: "331", 
            type: "Accessories", 
            material: "Leather", 
            mainImage: wallet, 
            cat1: "Accessories", 
            cat2: "Men", 
            cat3: "Wallets", 
            inStock: true
        },

        {
            id: 5,
            name: "Fashionable Handbag for Girls Pure Jeans Bag Best Quality",
            price1: "$40.00", 
            price2: "$36.99", 
            price3: "$30.99", 
            rating: "4.8", 
            reviews: "269", 
            sold: "987", 
            type: "Accessories", 
            material: "Jeans", 
            mainImage: bag, 
            cat1: "Accessories", 
            cat2: "Women", 
            cat3: "Hand Bags", 
            inStock: true
        },

        {
            id: 6,
            name: "Pure Jeans Casual Shorts With Side Pockets",
            price1: "$20.00", 
            price2: "$18.99", 
            price3: "$15.99", 
            rating: "4.6", 
            reviews: "151", 
            sold: "344", 
            type: "Clothing", 
            material: "Jeans", 
            mainImage: shorts, 
            cat1: "Clothing", 
            cat2: "Men", 
            cat3: "Shorts", 
            inStock: true
        },

        {
            id: 7,
            name: "Headphones for Multipurpose for Men and Women Excellent Sound Quality",
            price1: "$12.00", 
            price2: "$10.99", 
            price3: "$8.99", 
            rating: "5", 
            reviews: "181", 
            sold: "333", 
            type: "Electronics", 
            material: "Plastic and Metal", 
            mainImage: simpleHeadphone, 
            cat1: "Electronics", 
            cat2: "Periphrels", 
            cat3: "Headphones", 
            inStock: true
        },

        {
            id: 8,
            name: "Cermaic Pot for Multipurpose",
            price1: "$18.00", 
            price2: "$16.99", 
            price3: "$14.99", 
            rating: "4.3", 
            reviews: "101", 
            sold: "531", 
            type: "Home Decor", 
            material: "Ceramic", 
            mainImage: pot, 
            cat1: "Home and Decor", 
            cat2: "Plants", 
            cat3: "Pots", 
            inStock: true
        },

        {
            id: 9,
            name: "Electric Kettle Excellent Quality with 2 Years Warranty",
            price1: "$35.00", 
            price2: "$30.99", 
            price3: "$28.99", 
            rating: "4.5", 
            reviews: "451", 
            sold: "1.6k", 
            type: "Electronics", 
            material: "Wool", 
            mainImage: kettle, 
            cat1: "Electronics", 
            cat2: "Kitchen Appliances", 
            cat3: "Kettles", 
            inStock: true
        }
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

                            <img src={Product.mainImage} alt={Product.name} height={"345px"} />

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
                            <img src={germany} alt="Germany" height={'15px'} />
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