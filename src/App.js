import React from 'react'
require('dotenv').config()
import { Container, Row, Col } from 'react-bootstrap';
import {Route, Switch, NavLink } from "react-router-dom";
// import { Form, Col, Row, Button } from "react-bootstrap";
import MovieCard from './components/MovieCard'
import {movieData} from './data/movie_data'
import Counter from './components/Counter'
import ToDo from './components/ToDo' 
import SearchToDo from './components/SearchToDo' 
import UseEffect from './components/UseEffect'
import NormalContext from './components/NormalContext'
import A from './components/ComponentA'
import Axios from './components/Axios'
import About from '../src/pages/about/About'
import Contact from '../src/pages/contact/Contact'
import Product from '../src/pages/product/Product'
import Service from '../src/pages/service/Service'
import SearchInMockData from './components/SearchInMockData'
import NavBar from './components/NavBar'
import PageError from './errors/PageError'
import Menu from './pages/nav/Home'
import './styles/LandingPage.css'
import WeatherFetch from './components/WeatherFetch'
import Slider from './components/Slider/Slider'
import images from './data/SLIDER_DATA.js'
import Login from "./pages/account/Login";
import './App.scss'

let ColMyStyle1 = {fontFamily: 'areal', backgroundColor: 'powderblue', width: '80rem' }
let ColMyStyle2 = {fontFamily: 'areal', backgroundColor: 'lightblue', width: '80rem' }
let headline = {fontFamily: 'areal', backgroundColor: 'white' }

function App () {
  return(
  <div>
    <center>
    <NavBar />
    {/* <Slider slides={images}/> */}
    <p style={{fontFamily: 'Fantasy', fontSize: 34, color: '#41bc9d', textAlign:'center'}}>React:- All in a single page </p>
    {/* <NormalContext /> */}

    <Container>
      <Row>
        { movieData.map(data => <Col sm><MovieCard imgsrc = {data.imgsrc} name={data.name} decs={data.decs} /> </Col>) } {/* Movie Card component */}
      </Row>
    </Container>

    <Container>
      <Row xs="8">
        <Col style= {ColMyStyle1}>
       
          <div className="separator"><br/><span>... props:- variables passed by its parent component ...</span><br/></div>
          <br/><Counter /><br/> {/* Counter component */}
          
          <div className="separator"><br/><span>... useEffect:- do some work after render ...</span><br/></div>
          {/* <br/><UseEffect /><br/> */}

          <div className="separator"><br/><span>... useState:- variables, localStorage, directly initialized and managed by the component ...</span><br/></div>
          <br/><ToDo /><br/>   {/* ToDo component */} 

          <div className="separator"><br/><span>... useState:- variables, localStorage ...</span><br/></div>
          <br/><SearchToDo name="jiiii"/><br/>   {/* ToDo component */} 
        </Col>

        <Col style= {ColMyStyle2}>
          <div className="separator"><br/><span>... Axios get data ...</span><br/></div>
          <br/><Axios /><br/>

          <div className="separator"><br/><span>... About Route :- Menu, NavLink, Switch, Route, component, render, props ...</span><br/></div>
          <br/><NavLink exact activeClassName = 'active_class' style={{ marginRight: 10 }} to= '/'> About US </NavLink>
          <NavLink exact activeClassName = 'active_class' style={{ marginRight: 10 }} to= '/contact'> Contact </NavLink>
          <NavLink exact activeClassName = 'active_class' style={{ marginRight: 10 }} to= '/product'> Product </NavLink>
          <NavLink exact activeClassName = 'active_class' style={{ marginRight: 10 }} to= '/service'> Service </NavLink>
          <Switch> {/* if u want to pass props then use render else component is fine */}
            <Route exact path='/' component={About} /> 
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/product' component={() => <Product name= 'Product Props' />} />
            <Route exact path='/service' render={() => <Service name= 'Service Props' />} />
            <Route component={PageError} />
          </Switch><br/>

          <div className="separator"><br/><span>... Weather App:- useEffect, fetch api call ...</span><br/></div>
          <br/><WeatherFetch /><br/>

          <div className="separator"><br/><span>... useContext:- accessed throughout the component hierarchy without passing the props down manually to each level ...</span><br/></div>
          <br/><A /><br/>

          <div className="separator"><br/><span>... mochdata:mockaroo.com, filter search ...</span><br/></div>
          <br/><SearchInMockData /><br/>
        </Col>
      </Row>
    </Container>


    



    </center>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
  )
}

export default App