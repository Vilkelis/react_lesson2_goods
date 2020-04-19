import React from 'react';
import PropTypes from 'prop-types';
import ToolbarIcons from '../models/ToolbarIcons';

function IconSwitch(props) {
  const {icon, onSwitch} = props;  

  const handleClick = evt => { evt.preventDefault(); onSwitch(); }
  
  return (
    <a className="icon-switch" href="/" onClick={handleClick}>   
      <i className="material-icons">{icon}</i>            
    </a>
  );
}

IconSwitch.propTypes = {
  icon: function(props, propName, componentName) {
    if (ToolbarIcons.indexOf(props[propName]) === -1) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. One of the following values is available: ' +
        ToolbarIcons + '. Validation failed.'
      );
    }
  },
  onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;