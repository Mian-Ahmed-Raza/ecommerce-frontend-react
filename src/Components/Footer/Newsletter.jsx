import { useState } from 'react';
import './Newsletter.css'


function Newsletter(){
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email) return;
        
        // Newsletter subscription logic would go here
        // Example: await subscribeToNewsletter(email)
        
        setStatus('Subscribed successfully!');
        setEmail('');
        
        setTimeout(() => setStatus(''), 3000);
    };

    return(

        <section className="newsletter">

            <h2>Subscribe to our newsletter</h2>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    id='email' 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                />
                <button type="submit">Subscribe</button>
            </form>
            
            {status && <p style={{color: '#30C242', marginTop: '10px', fontSize: '14px'}}>{status}</p>}

        </section>

    )

}

export default Newsletter;