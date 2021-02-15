import React, { useState, useRef } from 'react';
import { Input, TextField } from '@material-ui/core';
import ToDo from './ToDo'

const SearchToDo = props => {
 
  
  const getSearchTerm = () => {
    console.log('----->>>.')
    
  };

  return (
    <>
      <h4> Search ToDo </h4>
      <Input 
        
        type='text' 
        placeholder="search todo..." 
       
        
      />
      <div>
        
      </div>
    </>
  );
}

export default SearchToDo