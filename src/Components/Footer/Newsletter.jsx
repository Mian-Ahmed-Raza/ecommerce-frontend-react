import './Newsletter.css'


function Newsletter(){

    return(

        <section className="newsletter">

            <h2>Subscribe to our newsletter</h2>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>

            <form>
                <input type="email" name="email" id='email' placeholder='Email' required/>
                <button type="submit">Subscribe</button>
            </form>

        </section>

    )

}

export default Newsletter;