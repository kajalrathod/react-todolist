import ListOfItems from "../ListOfItems";

const Item = (items) => {
    localStorage.setItem('item', JSON.stringify(items.length ? items : []))
}

export const listItems = (items) => {
    Item(items);
}

export const ItemReducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM" :
            state.items.push(action.payload);
            return {
                ...listItems(state.items),  
                ...state
            };
        
            case "REMOVE_ITEM" :              
                return {
                    ...listItems(action.payload),
                    ...state
                }

                case "COMPLETED" :
                    return {
                        ...listItems(action.payload),
                        ...state
                    }

        default:
    }
}