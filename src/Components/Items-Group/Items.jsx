import React from "react";
import './Item.css';

export default function Items(props) {

    return(

        <div className="items">


            <img className="img" src={props.imageUrl} alt={props.itemName} />
            <p className="item-name">{props.itemName}</p>
            <span className="from">From </span>
            <br />
            <span className="from">USD {props.price}</span>


        </div>

    )

}