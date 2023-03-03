import { combineReducers } from 'redux';
import bookReducer from '../redux/books/reducer';
import searchReducer from '../redux/search/reducer';
const rootReducer =  combineReducers({
    book: bookReducer,
    search: searchReducer
})
export default rootReducer;
