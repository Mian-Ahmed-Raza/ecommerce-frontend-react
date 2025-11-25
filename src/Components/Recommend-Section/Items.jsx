import PropTypes from 'prop-types';
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

Items.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};