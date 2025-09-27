import './Header.css'
import brandLogo from '../../assets/home-img/logo-colored.svg'
import arrowDown from '../../assets/home-img/expand_more.png'
import accountIcon from '../../assets/home-img/account vector.png'
import chatIcon from '../../assets/home-img/conversation vector.png'
import heartIcon from '../../assets/home-img/heart vector.png'
import cartIcon from '../../assets/home-img/cart vector.png'
import { Link } from 'react-router-dom'





function Header() {

    return (


        <header>

            <div className="head-container">

                <Link to="/"><img src={brandLogo} alt="Brand Logo" className="brandLogo" /></Link>

                <div className="search-container">

                    <input type="text" placeholder='Search' />
                    <a href="#">
                        <span>All Category</span>
                        <img src={arrowDown} alt="Down Arrow" />
                    </a>
                    <button type="button">Search</button>

                </div>

                <div className="navs">

                    <Link to="/login">
                        <img src={accountIcon} alt="Account" />
                        <span>Profile</span>
                    </Link>

                    <a href="#">
                        <img src={chatIcon} alt="Chat" />
                        <span>Message</span>
                    </a>

                    <a href="#">
                        <img src={heartIcon} alt="Heart" />
                        <span>Orders</span>
                    </a>

                    <a href="#">
                        <img src={cartIcon} alt="Cart" />
                        <span>My Cart</span>
                    </a>

                </div>

            </div>

        </header>


    )

}

export default Header;
