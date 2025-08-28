import './Sale-Section.css';
import React from 'react';
import timeImg from '../../assets/home-img/time.png';
import smartwatch from '../../assets/home-img/smartwatch.png';
import laptop from '../../assets/home-img/laptop.png';
import camera from '../../assets/home-img/camera.png';
import headphone from '../../assets/home-img/headphone.png';
import mobile from '../../assets/home-img/mobile.png';
import Items from './Items';

export default function SaleSection() {

    return (

        <section>


            <div className="sale-section">


                <div className="time">

                    <div>
                        <h2>Deals and offers</h2>
                        <p>Heygiene equipments</p>
                        <img src={timeImg} alt="time" />
                    </div>

                </div>

                <div className="items">

                    <Items image={smartwatch} name="Smart watches" discount="-25%"/>
                    <Items image={laptop} name="Laptops" discount="-30%"/>
                    <Items image={camera} name="Cameras" discount="-20%"/>
                    <Items image={headphone} name="Headphones" discount="-15%"/>
                    <Items image={mobile} name="Mobile Phones" discount="-10%"/>
                    
                </div>


            </div>


        </section>

    )

}