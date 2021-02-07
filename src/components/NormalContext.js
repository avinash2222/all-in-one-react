import React, { useState } from 'react';
import {UserConsumer} from '../contexts/UserContext'

export default function NormalContext() {
  return (
      <UserConsumer>
        { username => <div style = {{textAlign:'right', fontFamily: 'Arial'}}> Hello <span style = {{fontSize: 15, color: '#a1ca'}}> {username} </span></div> }
      </UserConsumer>
  );
}