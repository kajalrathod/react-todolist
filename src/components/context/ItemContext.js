import React, { useReducer} from 'react';
import { ItemReducer, listItems } from "./ItemReducer";

export const ItemContext = React.createContext([]);

export const storage = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

const initialStorage = { items :storage, ...listItems[storage] }

export const ItemProvider = (props) =>{
    const [state, dispatch] = useReducer(ItemReducer, initialStorage);
    
    const addItem = (payload) =>{
        dispatch({ type: "ADD_ITEM", payload});
    }

    const removeProduct =(payload) =>{
        dispatch({ type:"REMOVE_ITEM", payload})
    }

    const completeProd = (payload) =>{
        dispatch({type : "COMPLETED" , payload})
 
    }
    const contextValue ={
        addItem,
        removeProduct,
        completeProd,
        ...state
    }

    return(
        <ItemContext.Provider value={contextValue}>
            {props.children}
        </ItemContext.Provider>
    )
}