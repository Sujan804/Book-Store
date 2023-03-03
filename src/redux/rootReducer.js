import { combineReducers } from 'redux';
import bookReducer from '../redux/books/reducer';
import editReducer from '../redux/edits/reducer';
import searchReducer from '../redux/search/reducer';
const rootReducer =  combineReducers({
    book: bookReducer,
    search: searchReducer,
    edit: editReducer
})
export default rootReducer;
