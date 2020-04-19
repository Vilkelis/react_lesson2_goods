import React from 'react';
import Product from '../models/Product';

function ShopItem(props) {
  const {product} = props;
  
  const imageStyle = {
    backgroundImage:  'url(' + product.img + ')'
  };
  
  return (
    <div className="shop-item">
      <div className="shop-item__product-img" style={imageStyle}></div>       
      <div className="product-name">{product.name}</div>
      <div className="product-color">{product.color}</div>         
      <div className="product-price">
        <span className="product-price_currency">&#36;</span>{product.price}
      </div>
      <div className="shop-item__add-to-cart-button">
        <a className="product-add-to-cart-button" href="/">Add to cart</a>
      </div>       
    </div>
  );
}

ShopItem.propTypes = {
  product: Product().isRequired 
}

export default ShopItem;