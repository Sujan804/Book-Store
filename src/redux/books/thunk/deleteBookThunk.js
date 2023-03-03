import axios from 'axios';
import { deleteBook } from '../actions';
const deleteBookThunk = (id) =>{
    return async (dispatch)=>{
        const response = await axios.delete(`http://localhost:9000/books/${id}`,
        );
        const book = response.data;
        console.log("Deleted Books",book.id)
        dispatch(deleteBook(id))
    }
}
export default deleteBookThunk;

