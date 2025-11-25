import './MainSection.css';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/home-img/banner.png'
import avatar from '../../assets/home-img/Avatar.png'

export default function MainSection(){

    return(

        <section>


            <div className="main-section">


                <div className="cat">

                    <button type="button">Automobiles</button>

                    <button type="button">Clothes and wear</button>

                    <button type="button">Home interiors</button>
                    
                    <button type="button">Computer and tech</button>

                    <button type="button">Tools, equipments</button>

                    <button type="button">Sports and outdoors</button>

                    <button type="button">Animal and pets</button>

                    <button type="button">Machinery tools</button>

                    <button type="button">More Categories</button>

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

                        <Link to="/register"><button type="button">Join now</button></Link>
                        <Link to="/login"><button type="button">Log in</button></Link>

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

