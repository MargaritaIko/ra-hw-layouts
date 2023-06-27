import React from 'react';
import ShopCard from './ShopCard.js';
import PropTypes from 'prop-types';

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map( obj => <ShopCard items={obj} key={obj.name + '_' + obj.color} />)}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
