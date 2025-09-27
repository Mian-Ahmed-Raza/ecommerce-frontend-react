import styles from './Items.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

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