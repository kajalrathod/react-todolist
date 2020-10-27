import React from 'react';
import { Button, List } from 'semantic-ui-react'
import './todolist.css';


const ListOfItems = ({todo, completeTodo, index, removeTodo}) =>{
    return( 
            <>
               <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                    {todo.text}
                        <div>
                        <button onClick={() => completeTodo(index)}>Complete</button>
                        <button onClick={() => removeTodo(index)}>x</button>
                        </div>
                </div>
            </>
    );
}

export default ListOfItems;

