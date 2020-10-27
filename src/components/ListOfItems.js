import React from 'react';
import { Button, List } from 'semantic-ui-react'
import './todolist.css';


const ListOfItems = ({todo, completeTodo, index, removeTodo}) =>{
    return( 
            <>
            <List>
                <List.Item style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                {todo.text}  
              
                <Button onClick={() => completeTodo(index)}>Complete</Button>
                <Button onClick={() => removeTodo(index)}>x</Button>
            
                </List.Item>
                </List>
            </>
    );
}

export default ListOfItems;

// <List bulleted>
    //     <List.Item>Gaining Access</List.Item>
    //     <List.Item>Inviting Friends</List.Item>
    //     <List.Item>
    //       Benefits
    //     </List.Item>
    //     <List.Item>Warranty</List.Item>
    //   </List>