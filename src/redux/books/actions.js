import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from './actionType'

const addBook = (newBook)=>{
    return {
        type: ADD_BOOK,
        payload: newBook
    }
}

const loadedBook = (books)=>{
    return {
        type: LOADED_BOOK,
        payload: books
    }
}
// payload = {
//     id,
//     updated_book
// }
const updateBook = (payload)=>{
    return {
        type: UPDATE_BOOK,
        payload: payload
    }
}

const deleteBook = (id)=>{
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export { addBook, updateBook, deleteBook, loadedBook }

