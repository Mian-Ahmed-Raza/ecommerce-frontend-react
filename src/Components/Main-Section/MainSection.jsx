import './MainSection.css';

import bannerImg from '../../assets/home-img/banner.png'
import avatar from '../../assets/home-img/Avatar.png'

export default function MainSection(){

    return(

        <section>


            <div className="main-section">


                <div className="cat">

                    <a href="#">Automobiles</a>

                    <a href="#">Clothes and wear</a>

                    <a href="#">Home interiors</a>
                    
                    <a href="#">Computer and tech</a>

                    <a href="#">Tools, equipments</a>

                    <a href="#">Sports and outdoors</a>

                    <a href="#">Animal and pets</a>

                    <a href="#">Machinery tools</a>

                    <a href="#">More Categories</a>

                </div>

                <div className="banner">

                    <div className="banner-text">

                        <h2>Latest Trending</h2>
                        <h1>Electronic Items</h1>
                        <button type="button">Learn more</button>

                    </div>

                </div>

                <div className="user-section">

                    <div className="user">

                        <div className="avatar">
                            <img src={avatar} alt="Avatar" />
                            <p>Hi, user <br />let's get started</p>
                        </div>

                        <button type="button">Join now</button>
                        <button type="button">Log in</button>

                    </div>

                    <div className="promo">

                        <p>Get US $10 off <br />with a new <br />supplier</p>

                    </div>

                    <div className="quote">

                        <p>Send quotes with <br />supplier <br />preference</p>

                    </div>

                </div>


            </div>


        </section>

    )

}

