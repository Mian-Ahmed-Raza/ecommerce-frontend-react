import styles from './RecommendSection.module.css';
import React from 'react';
import Items from './Items.jsx';
import tShirt from '../../assets/home-img/t-shirt.png';
import brownCoat from '../../assets/home-img/brown coat.png';
import blazzer from '../../assets/home-img/blazer.png';
import wallet from '../../assets/home-img/wallet.png';
import bag from '../../assets/home-img/bag.png';
import shorts from '../../assets/home-img/shorts.png';
import simpleHeadphone from '../../assets/home-img/simple headphone.png';
import pot from '../../assets/home-img/pot.png';
import kettle from '../../assets/home-img/kettle.png';
import { Link } from 'react-router-dom';

export default function RecommendSection() {


    return (

        <section>


            <div className={styles.recommendSection}>


                <h2 className={styles.heading}>Recommended for you</h2>

                <div className={styles.itemsContainer}>


                    <Link to="/Product">
                        <Items
                            image={tShirt}
                            name="T-shirts with multiple colors for men"
                            price="10.30"
                        />
                    </Link>


                    <Link to="/Product">
                        <Items
                            image={brownCoat}
                            name="Brown winter coat medium size"
                            price="25.50"
                        />
                    </Link>


                    <Link to="/Product">
                        <Items
                            image={blazzer}
                            name="Stylish black blazer"
                            price="30.00"
                        />
                    </Link>


                    <Link to="/Product">
                        <Items
                            image={wallet}
                            name="Leather wallet"
                            price="15.00"
                        />
                    </Link>


                    <Link to="/Product">
                        <Items
                            image={bag}
                            name="Fashionable handbag"
                            price="40.00"
                        />
                    </Link>

                    <Link to="/Product">
                        <Items
                            image={shorts}
                            name="Casual shorts"
                            price="20.00"
                        />
                    </Link>

                    <Link to="/Product">
                        <Items
                            image={simpleHeadphone}
                            name="Simple headphone"
                            price="12.00"
                        />
                    </Link>


                    <Link to="/Product">
                        <Items
                            image={pot}
                            name="Ceramic pot"
                            price="18.00"
                        />
                    </Link>


                    <Link to="/Product">
                        <Items
                            image={kettle}
                            name="Electric kettle"
                            price="35.00"
                        />
                    </Link>

                    <Link to="/Product">
                        <Items
                            image={brownCoat}
                            name="Brown winter coat medium size"
                            price="25.50"
                        />
                    </Link>

                </div>


            </div>


        </section>

    )


}