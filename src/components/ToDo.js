import React, {useState} from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Icon from '@material-ui/core/Icon';
import { Container, Row, Col } from 'react-bootstrap';
import { Input, TextField } from '@material-ui/core';

export default function ToDo() {
  const [inputText, setInputText] =useState(' ')
  const [todos, setTodos] = useState([])
  
  function inputTextHandler(e) {
    setInputText(e.target.value)
  }

  function changeToDo(e) {
    setTodos([...todos, inputText])
    setInputText(" ")
  }

  const deleteItems = (key) => {
    setTodos( oldItems => {
      return oldItems.filter((arrElem, index) => {
        return index !== key
      })
    })
  }

  return (
    <div style={{backgroundColor: "#aaff", width: '18rem' }}>
      <p style={{ fontWeight: 'bold', fontSize: '25px' }}>ToDo List</p>
      <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
          onChange = {inputTextHandler}
          value={inputText}
        />
     
      <AddBoxIcon onClick= {changeToDo} style={{ fontSize: 50 }}/><br/>
      <ol>
        { todos.map((item, key) => {
          return (
            <div>
              <Container>
                <Row>
                  <Col style={{textAlign: 'left'}}>{item}</Col> 
                  <Col><DeleteForeverIcon onClick = {() => deleteItems(key) } style={{ fontSize: 30 }}/></Col>
                </Row>
              </Container>
            </div>
          )
         }) 
        }
      </ol>
    </div>
  )
}
