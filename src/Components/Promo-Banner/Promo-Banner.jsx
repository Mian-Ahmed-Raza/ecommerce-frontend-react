import styles from './Promo-Banner.module.css';

export default function PromoBanner() {

    return(


        <div className={styles.banner}>

            <div className={styles.discount}>

                <h3>Super discount on more than 100 USD</h3>
                <p>Avail now before the promo ends</p>

            </div>

            <button type="button">Shop Now</button>

        </div>


    )

}