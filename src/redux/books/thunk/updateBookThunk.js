import axios from 'axios';
import { updateBook } from '../actions';
const updateBookThunk = ({id,updatedBook}) =>{
    // console.log("thunk", newBook)
    return async (dispatch)=>{
        const response =  await axios.put(`http://localhost:9000/books/${id}`,updatedBook);
        const book = response.data;
        console.log(response)
        // console.log(typeof book)
        dispatch(updateBook(book))
    }
}
export default updateBookThunk

