import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';
import Product from '../models/Product';

function CardView(props) {
  const {cards} = props;  
  
  return (
    <div className="card-view">
      {cards.map( (card, index) => <ShopCard key={index} 
                                             product={card} />)}            
    </div>
  );
}
 
CardView.propTypes = {
  cards: PropTypes.arrayOf(Product()).isRequired 
}

export default CardView;