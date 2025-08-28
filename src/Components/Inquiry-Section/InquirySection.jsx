import styles from './InquirySection.module.css';

export default function InquirySection() {


    return (

        <section>


            <div className={styles.inquirySection}>


                <div className={styles.text}>

                    <h2 className={styles.h2}>An easy way to send <br />requests to all suppliers</h2>

                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Illo necessitatibus, odit assumenda itaque ipsam molestias?</p>

                </div>

                <div className={styles.formDiv}>


                    <form action="submit" className={styles.form}>

                        <div>
                            <p>Send quote to suppliers</p>

                            <input className={styles.itemName} type="text" name="" id="" placeholder='What item do you need?' required/>

                            <textarea className={styles.details} name="" id="" placeholder='Type more details' required></textarea>

                            <input className={styles.quantity} type="number" placeholder='Quantity' required/>

                            <input className={styles.pcs} type="text" placeholder='Pcs' required/>

                            <button type="submit">Send Inquiry</button>
                        </div>


                    </form>


                </div>


            </div>

        </section>

    )


}