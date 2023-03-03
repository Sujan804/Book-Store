import { CLOSE_EDIT, EDIT_BOOK } from "./actiontype";
import initialState from "./initialState";

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case EDIT_BOOK:
            return {
                opened: true,
                ...action.payload
            }
        case CLOSE_EDIT:
            return {
                opened: false
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer