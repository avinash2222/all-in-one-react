import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import C from './UseContextC'
import B from './UseContextB'
 
 const A = () => (
  <ThemeContext.Provider value="red">
    <B />
    <C />
  </ThemeContext.Provider>
);

export default A