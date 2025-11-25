import React from "react";
import PropTypes from "prop-types";
import styles from "./Service.module.css";

export default function Service(props){


    return(


        <div className={styles.service}>


            <div className={styles.image} style={{backgroundImage: `url(${props.image})`}}>

                <div className={styles.icon}>
                    <img src={props.icon} alt={props.alt} />
                </div>

            </div>

            <p className={styles.name}>{props.name}</p>


        </div>


    )


}

Service.propTypes = {
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};