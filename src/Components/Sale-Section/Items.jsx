import React from 'react';
import PropTypes from 'prop-types';
import './Items.css'


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

Items.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired
};