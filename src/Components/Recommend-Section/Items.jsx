import styles from './Items.module.css';

export default function Items(props) {


    return(


        <div className={styles.item}>


            <div className={styles.image}>

                <img src={props.image} alt={props.name} />

            </div>

            <span className={styles.price}>${props.price}</span>

            <p className={styles.name}>{props.name}</p>


        </div>


    )


}