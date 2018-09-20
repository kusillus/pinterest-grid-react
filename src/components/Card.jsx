import React from 'react';
import './Card.scss';

const Card = ({name, image, status,origin,gender}) => (
    <div className="card__container">
        <img className="card__image" src={image} alt=""/>      
        <div  className="card__data">
            <span>{name}</span>
            <span>{status}</span>
            <span>{origin}</span>
            <span>{gender}</span>
        </div>
    </div>
)

export default Card;