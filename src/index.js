import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter, Route } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <UserProvider value= "avinash2222">
      <App />
    </UserProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)

 