import React from "react";
import PropTypes from "prop-types";
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

Items.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};