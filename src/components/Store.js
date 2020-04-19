import React from 'react';
import PropTypes from 'prop-types';
import ToolbarIcons from '../models/ToolbarIcons';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';
import Product from '../models/Product';
 
function Store(props) {
  const { products } = props;

  const defaultView = 0;
   
  const [currentView, setState] = React.useState(defaultView);
  const handleSwitch = () => { setState(currentView === 0 ? 1 : 0) };
  const ViewToRender = () => { if (currentView === 0) { 
                                 return <CardsView cards={products} />;
                               }
                               else {
                                 return <ListView items={products} />;
                               }
                             }
   
  return (
    <div className="store">
      <div className="store__toolbar">        
        <IconSwitch icon={ToolbarIcons[currentView]} onSwitch={handleSwitch} /> 
      </div>
      <div className="store__content">        
        <ViewToRender />        
      </div>
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.arrayOf(Product()).isRequired   
}

export default Store;