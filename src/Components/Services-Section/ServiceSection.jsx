import React from "react";
import styles from "./ServiceSection.module.css";
import Service from "./Service.jsx";
import industry from '../../assets/home-img/industry.png';
import colorful from '../../assets/home-img/colorful.png';
import plane from '../../assets/home-img/plane.png';
import monitoring from '../../assets/home-img/monitoring.png';
import search from '../../assets/home-img/search.svg';
import security from '../../assets/home-img/security.svg';
import send from '../../assets/home-img/send.svg';
import inventory from '../../assets/home-img/inventory_2.svg';

export default function ServiceSection(){


    return(


        <section>


            <div className={styles.serviceSection}>


                <h2 className={styles.heading}>Our extra services</h2>

                <div className={styles.services}>


                    <Service image={industry} icon={search} alt="Search" name="Source from Industry Hubs"/>

                    <Service image={colorful} icon={inventory} alt="Inventory" name="Customize your Products"/>

                    <Service image={plane} icon={send} alt="Send" name="Fast, reliable shipping by ocean or air"/>

                    <Service image={monitoring} icon={security} alt="Security" name="Product monitoring and inspection"/>

                </div>


            </div>


        </section>


    )


}