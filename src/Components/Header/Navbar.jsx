import './Navbar.css';
import menuLines from '../../assets/home-img/menu.png';
import arrow from '../../assets/home-img/expand_more.png';
import flag from '../../assets/home-img/icon.png';




function Navbar() {


    return (

        <nav>


            <div className="navbar">

                <div className="nav-items">

                    <a href="#">
                        <img src={menuLines} alt="Menu" />
                        <span>All Category</span>
                    </a>

                    <a href="#">Hot offers</a>

                    <a href="#">Gift Boxes</a>

                    <a href="#">Projects</a>

                    <a href="#">Menu items</a>

                    <a href="#" className='help-dropdown'>
                        <span>Help</span>
                        <img src={arrow} alt="Arrow" />
                        <div className="dropdown">

                            <p>Help</p>
                            <p>Help</p>
                            <p>Help</p>

                        </div>
                    </a>

                </div>

                <div className="nav-right">

                    <a href="#" className="lang help-dropdown" >

                        <span>English, USD</span>
                        <img src={arrow} alt="Arrow" />
                        <div className="dropdown">

                            <p>Spanish, EUR</p>
                            <p>French, EUR</p>
                            <p>Chinese, CNY</p>

                        </div>

                    </a>

                    <a href="#" className="ship">

                        <span>Ship to</span>
                        <img src={flag} alt="Flag" />
                        <img src={arrow} alt="Arrow" />

                    </a>

                </div>

            </div>


        </nav>

    )


}

export default Navbar;