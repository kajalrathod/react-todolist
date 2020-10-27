import React, { useEffect } from 'react';
import Todolist from './TodoList';
import {ItemProvider} from '../components/context/ItemContext';
import {GoogleAuth} from "../components/GoogleAuth";
const App = () =>{

    // const listOfItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    // useEffect(() =>{
    //     localStorage.setItem('items', ['kajal', 'kirtan']);
    // },[]);
    return(
       <ItemProvider>
        <GoogleAuth />
        <div className="ui container">
            <Todolist />
        </div>
       </ItemProvider>
            
       
        
    );
}

export default App;