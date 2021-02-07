import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
 
const C = () => (
  <ThemeContext.Consumer>
    {color => <p style={{ color }}> useContext component C </p> }
  </ThemeContext.Consumer>
);

export default C