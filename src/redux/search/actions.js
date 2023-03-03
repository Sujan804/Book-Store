import { SET_KEYWORD, TOGGLE_FEATURED } from "./actionType"

const toggleFeatured = (status)=>{
    return {
        type: TOGGLE_FEATURED,
        payload: status
    }
}

const setKeyword = (key)=>{
    return {
        type: SET_KEYWORD,
        payload: key
    }
}

export { toggleFeatured, setKeyword }

