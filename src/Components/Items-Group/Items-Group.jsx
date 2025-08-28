import React from "react";

import "./Items-Group.css";
import Items from "./Items.jsx";

import chair from '../../assets/home-img/chair.png';
import lamp from '../../assets/home-img/lamp.png';
import matress from '../../assets/home-img/matress.png';
import pot from '../../assets/home-img/pot small.png';
import mixer from '../../assets/home-img/mixer.png';
import blender from '../../assets/home-img/blender.png';
import rasm from '../../assets/home-img/rasm.png';
import plant from '../../assets/home-img/plant.png';

export default function ItemsGroup(props) {

    return (

        <section>

            <div className="items-group">


                <div className="left-aside" style={{backgroundImage: `url(${props.backgroundImage})`}}>

                    <h2>{props.title}</h2>

                    <button type="button">Source Now</button>

                </div>

                <div className="items-grid">

                    <Items itemName="Soft Chairs" price="19" imageUrl={chair} />
                    <Items itemName="Modern Lamp" price="15" imageUrl={lamp} />
                    <Items itemName="Comfortable Mattress" price="299" imageUrl={matress} />
                    <Items itemName="Stylish Pot" price="25" imageUrl={pot} />
                    <Items itemName="High-Speed Mixer" price="89" imageUrl={mixer} />
                    <Items itemName="Professional Blender" price="129" imageUrl={blender} />
                    <Items itemName="Rasm" price="49" imageUrl={rasm} />
                    <Items itemName="Beautiful Plant" price="19" imageUrl={plant} />

                </div>


            </div>

        </section>
    
)

}