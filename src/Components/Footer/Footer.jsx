import './Footer.css'
import Copyright from './Copyright';

import logo from '../../assets/home-img/logo-colored.svg';
import fbLogo from '../../assets/home-img/facebook3.png'
import twitterLogo from '../../assets/home-img/twitter3.png'
import liLogo from '../../assets/home-img/linkedin3.png'
import igLogo from '../../assets/home-img/instagram3.png'
import ytLogo from '../../assets/home-img/youtube3.png'
import applebtn from '../../assets/home-img/apple store.png'
import playbtn from '../../assets/home-img/google play.png'
import { Link } from 'react-router-dom';

export default function Footer() {


    return (

        <>
        <footer>


            <div className="footer-container">


                <div className="company-info">

                    <Link to="/"><img src={logo} alt="Logo" style={{ height: '46px' }} /></Link>

                    <p>Best information about the company <br />Follow us on social media</p>

                    <div className="social">

                        <a href="https://www.facebook.com/profile.php?id=100081374814371"><img src={fbLogo} alt="Facebook" /></a>
                        <a href="https://www.linkedin.com/in/mian-ahmed-raza/"><img src={twitterLogo} alt="Twitter" /></a>
                        <a href="https://www.linkedin.com/in/mian-ahmed-raza/"><img src={liLogo} alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/mian_ahmed_62/"><img src={igLogo} alt="Instagram" /></a>
                        <a href="https://wa.me/+923247932617"><img src={ytLogo} alt="YouTube" /></a>

                    </div>

                </div>

                <div className="footer-links">

                    <span>About</span>

                    <a href="#">About Us</a>

                    <a href="#">Find Store</a>

                    <a href="#">Categories</a>

                    <a href="#">Blogs</a>

                </div>

                <div className="footer-links">

                    <span>Partnership</span>

                    <a href="#">Become Partner</a>

                    <a href="#">Affiliate</a>

                    <a href="#">Influencer</a>

                    <a href="#">Own Store</a>

                </div>

                <div className="footer-links">

                    <span>Information</span>

                    <a href="#">Help Center</a>

                    <a href="#">Money Refund</a>

                    <a href="#">Shipping</a>

                    <a href="#">Contact Us</a>

                </div>

                <div className="footer-links">

                    <span>For users</span>

                    <Link to="/login">Login</Link>

                    <Link to="/register">Register</Link>

                    <a href="#">Settings</a>

                    <a href="#">My Orders</a>

                </div>

                <div className="footer-links">

                    <span>Get App</span>

                    <a href="#"><img src={applebtn} alt="Apple Store" /></a>

                    <a href="#"><img src={playbtn} alt="Google Play" /></a>

                </div>


            </div>


        </footer>

        <Copyright />

        </>

    )


}