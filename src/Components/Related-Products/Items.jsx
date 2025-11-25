import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Items.module.css';

export default function Items(props){

    return(

        <div className={styles.item}>


            <div className={styles.image}>
                <img src={props.image} alt={props.name} />
            </div>

            <p className={styles.name}>{props.name}</p>
            <p className={styles.price}>{props.price}</p>


        </div>

    )

}

Items.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};