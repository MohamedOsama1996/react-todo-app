import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import React , {useState,useEffect} from 'react';
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('')
  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc =>{
                 return ({
                   id : doc.id,
                   todo : doc.data().todo
                 })
        } ) )
      })
  }, [])
  const addTodo = (event) =>{
    event.preventDefault(); //i will stop the refreshing 
    //this will fire off when we click the button
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('') // clear up the input field 
  }
  return (
    <div className="App">
        <h1>hello clever programmers </h1>
        <form>
          <FormControl>
          <InputLabel>write a Todo </InputLabel>
           <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input}  type="submit" onClick={addTodo} variant="contained" color="primary">Add todo </Button>
          </FormControl>
        
        </form>
       
        <ul>
          {todos.map( todo =>(
           <Todo id ={todo.id} text={todo.todo} />
          ))}
        </ul>
    </div>
  );
}

export default App;
