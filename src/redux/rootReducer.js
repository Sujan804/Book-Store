import { combineReducers } from 'redux';
import bookReducer from '../redux/books/reducer';
const rootReducer =  combineReducers({
    book: bookReducer
})

export default rootReducer;
