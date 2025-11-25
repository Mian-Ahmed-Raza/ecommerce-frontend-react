import { useState } from 'react';
import styles from './InquirySection.module.css';

export default function InquirySection() {
    const [formData, setFormData] = useState({
        item: '',
        details: '',
        quantity: '',
        unit: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Quote submission logic would go here
        // Example: await submitQuote(formData)
        
        setSubmitted(true);
        setFormData({ item: '', details: '', quantity: '', unit: '' });
        
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };


    return (

        <section>


            <div className={styles.inquirySection}>


                <div className={styles.text}>

                    <h2 className={styles.h2}>An easy way to send <br />requests to all suppliers</h2>

                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Illo necessitatibus, odit assumenda itaque ipsam molestias?</p>

                </div>

                <div className={styles.formDiv}>


                    <form onSubmit={handleSubmit} className={styles.form}>

                        <div>
                            <p>Send quote to suppliers</p>

                            <input 
                                className={styles.itemName} 
                                type="text" 
                                name="item" 
                                placeholder='What item do you need?' 
                                value={formData.item}
                                onChange={handleChange}
                                required
                                aria-label="Item name"
                            />

                            <textarea 
                                className={styles.details} 
                                name="details" 
                                placeholder='Type more details' 
                                value={formData.details}
                                onChange={handleChange}
                                required
                                aria-label="Item details"
                            ></textarea>

                            <input 
                                className={styles.quantity} 
                                type="number" 
                                name="quantity"
                                placeholder='Quantity' 
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                                aria-label="Quantity"
                            />

                            <input 
                                className={styles.pcs} 
                                type="text" 
                                name="unit"
                                placeholder='Pcs' 
                                value={formData.unit}
                                onChange={handleChange}
                                required
                                aria-label="Unit"
                            />

                            <button type="submit">Send Inquiry</button>
                            
                            {submitted && <p style={{color: '#30C242', marginTop: '10px', fontSize: '14px'}}>Quote sent successfully!</p>}
                        </div>


                    </form>


                </div>


            </div>

        </section>

    )


}