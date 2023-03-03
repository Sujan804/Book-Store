import axios from 'axios';
import { loadedBook } from '../actions';
const loadedBookThunk = () =>{
    return async (dispatch)=>{
        const response = await axios.get("http://localhost:9000/books",
        );
        const book = response.data;
        console.log("Books",response.data)
        dispatch(loadedBook(book))
    }
}
export default loadedBookThunk

