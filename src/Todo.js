import {  Button, List, ListItem, ListItemAvatar, ListItemText  } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react'
import './Todo.css'
import db from './firebase'
function Todo(props) {
    return (
       <List className="todo__list">
           <ListItemAvatar>
           </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.text} ></ListItemText>
            </ListItem>
            <DeleteForeverIcon onClick = { event => db.collection('todos').doc(props.id).delete()} />
       </List>
    )
}

export default Todo
