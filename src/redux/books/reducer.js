import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from "./actionType"
import initialState from "./initialState"
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOADED_BOOK:
            return [
                ...action.payload
            ]
        case ADD_BOOK:
            // console.log("reducer", action.payload)
            return [
                ...state, action.payload
            ]
        case UPDATE_BOOK :
            const updatedBooks1 = state.map((book)=>{
                if(book.id === action.payload.id){
                    return action.payload.updated_book
                }
                return book;
            })
            return [...updatedBooks1]
        case DELETE_BOOK:
            const updatedBooks2 = state.filter((book)=>book.id!==action.payload)
            return updatedBooks2
        default:
            return [...state]
    }
}
export default reducer