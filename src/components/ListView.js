import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import Product from '../models/Product';

function ListView(props) {
  const {items} = props;  
  
  return (
    <div className="list-view">
      {items.map( (item, index) => <ShopItem key={index} 
                                             product={item} />)}            
    </div>
  );
}
 
ListView.propTypes = {
  items: PropTypes.arrayOf(Product()).isRequired 
}

export default ListView;