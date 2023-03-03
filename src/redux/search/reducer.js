import { SET_KEYWORD, TOGGLE_FEATURED } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case TOGGLE_FEATURED:
           
            return {
               ...state,
               featured: action.payload
            }
        case SET_KEYWORD:
            return {
                ...state,
                key: action.payload
            }
        default:
            return {
                ...state
            }

    }
}

export default reducer