import React from 'react'
import Add  from './Add'
import Sub  from './Sub'
import { Container, Row, Col } from 'react-bootstrap';
import {Route, Switch, NavLink } from "react-router-dom";
// import { Form, Col, Row, Button } from "react-bootstrap";
import MovieCard from './components/MovieCard'
import {movieData} from './data/movie_data'
import Counter from './components/Counter'
import ToDo from './components/ToDo'
import UseEffect from './components/UseEffect'
import NormalContext from './components/NormalContext'
import A from './components/ComponentA'
import Axios from './components/Axios'
import About from '../src/pages/about/About'
import Contact from '../src/pages/contact/Contact'
import PageError from './errors/PageError'
import Menu from './pages/nav/Home'
import './styles/LandingPage.css'


let MyStyle = {fontFamily: 'areal', backgroundColor: 'powderblue', width: '80rem' }

function App () {
  return(
  <div>
    <center><p style={{fontFamily: 'Fantasy', fontSize: 34, color: 'lightpink', textAlign:'center'}}>Movie Rating Plateform </p>

    <p style= {MyStyle}>... context ... <NormalContext /></p>

    <p style= {MyStyle}>... props ...</p>
    <Counter /> {/* Counter component */}

    <br/><p style= {MyStyle}>... useState ...</p>
    <ToDo />   {/* ToDo component */}

    <br/><p style= {MyStyle}>... movieCard ...</p>
    <Container>
      <Row>
        { movieData.map(data => <Col sm><MovieCard imgsrc = {data.imgsrc} name={data.name} decs={data.decs} /> </Col>) } {/* Movie Card component */}
      </Row>
    </Container>

    <br/><p style= {MyStyle}>... useEffect ...</p>
    <UseEffect />

    <br/><p style= {MyStyle}>... useContext ...</p>
    <A />

    <br/><p style= {MyStyle}>... Axios ...</p>
    <Axios />

    <br/><p style= {MyStyle}>... About Route :- Switch, Route ...</p>
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/contact' component={Contact} />
      <Route component={PageError} />
    </Switch>

    <br/><p style= {MyStyle}>... Menu :- Link...</p>
    <NavLink exact activeClassName = 'active_class' to= '/'> About US </NavLink>
    <NavLink exact activeClassName = 'active_class' to= '/contact'> Contact </NavLink>

    
    </center>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
  )
}

export default App