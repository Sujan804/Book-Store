import axios from 'axios';
import { addBook } from '../actions';
const addBookThunk = (newBook) =>{
    // console.log("thunk", newBook)
    return async (dispatch)=>{
        const response =  await axios.post("http://localhost:9000/books",
            {
                newBook
            }
        );
        const book = response.data;
        // console.log(typeof book)
        dispatch(addBook(book))
    }
}
export default addBookThunk

