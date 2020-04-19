import React from 'react';
import Product from '../models/Product';

function ShopCard(props) {
  const {product} = props;
  
  const imageStyle = {
    backgroundImage:  'url(' + product.img + ')'
  };
  
  return (
    <div className="shop-card">
      <div className="shop-card__product-img" style={imageStyle}>

        <div className="shop-card__product-title">
          <div className="product-name">{product.name}</div>
          <div className="product-color">{product.color}</div>
        </div>

        <div className="shop-card__product-footer">
          <div className="product-price">
            <span className="product-price__currency">&#36;</span>{product.price}
          </div>
          <a className="product-add-to-cart-button" href="/">Add to cart</a>
        </div>
        
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  product: Product().isRequired
}

export default ShopCard;