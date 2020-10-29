
import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <h2> {props.moy.name} </h2>
    <p> {props.moy.email} </p>
    <p> {props.moy.address.city} </p>
  </div>
);