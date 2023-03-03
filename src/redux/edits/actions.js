import { CLOSE_EDIT, EDIT_BOOK, OPEN_EDIT } from "./actiontype"

const editBook = (book)=>{
    return{
        type: EDIT_BOOK,
        payload: book
    }
   
}
const openEdit = ()=>{
    return {
        type: OPEN_EDIT
    }
}
const closeEdit = ()=>{
    return {
        type: CLOSE_EDIT
    }
}
export { editBook, openEdit, closeEdit }

