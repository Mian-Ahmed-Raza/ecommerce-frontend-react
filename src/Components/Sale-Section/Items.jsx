import './Items.css'
import React from 'react';


export default function Items(props){

    return(

        <div className="item">


            <div className="image">

                <img src={props.image} alt={props.name} />

            </div>

            <p>{props.name}</p>
            <span>{props.discount}</span>


        </div>

    )

}