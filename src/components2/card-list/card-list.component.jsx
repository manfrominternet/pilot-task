import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.moyns.map(moy => (
      <Card key={moy.id} moy={moy} />
    ))}
  </div>
);