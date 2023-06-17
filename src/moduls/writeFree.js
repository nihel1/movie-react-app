import { getCookie } from "../util/cookie";

// action type
const DATA_UPDATE = "writeFree/DATA_UPDATE";

// create action object
export const dataUpdate = () => ({
    type: DATA_UPDATE
})

// initial state
let time = new Date()
const initialState = {
    textState:{
        t_title: "",
        t_desc: "",
        t_nickname: getCookie("usernickname"),
        t_date: time.toLocaleTimeString()
    }  
}

export default function textList(state=initialState, action){
    switch(action.type){
        case DATA_UPDATE:
            return {
                ...state,
                [action.name] : action.value
            };
        default:
            return state;    
    }
}