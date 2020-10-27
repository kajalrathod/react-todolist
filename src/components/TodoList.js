import React, { useContext } from 'react';
import { Icon, Form } from 'semantic-ui-react';
import ListOfItems from './ListOfItems';
import {ItemContext} from '../components/context/ItemContext';


const TodoForm = ({addTodo}) =>{
    const [value, setValue] = React.useState("");
    
    const handleSubmit = e => {    
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };
    
      return (
          <Form onSubmit={handleSubmit}>
            <Form.Group >
            <Form.Input icon={<Icon name='plus' inverted circular link onClick={handleSubmit}/>}
              type="text"
              className="input"
              value={value}
              onChange={e => setValue(e.target.value)}/>
            </Form.Group>
          </Form>
      );
}


const TodoList = () => {
    const {addItem, removeProduct, completeProd} = useContext(ItemContext);
    const {items} = useContext(ItemContext);
    const[todos, setTodos] = React.useState(items);
   
    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
        addItem({text});
      };

      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
        completeProd(newTodos);      
      };

      const removeTodo = index =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
        removeProduct(newTodos);
      }
    return(
        <>
           <div>
            <div>
                {todos.map((todo, index)=> (           
                    <ListOfItems
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                         />
                )   )}
            </div>
            <TodoForm  addTodo={addTodo} />
        </div>
        </>
    );
}



export default TodoList;

