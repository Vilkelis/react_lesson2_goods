import PropTypes from 'prop-types';

function Product() {
  return PropTypes.shape({            
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string
    } 
  );
}
  
export default Product;