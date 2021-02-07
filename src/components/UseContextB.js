import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
 
const B = () => (
  <ThemeContext.Consumer>
    {color => <p style={{ color }}> useContext component B </p>}
  </ThemeContext.Consumer>
);

export default B