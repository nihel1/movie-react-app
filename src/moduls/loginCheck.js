// action type
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_SETID = 'SET_SETID';



//action creator function
export const setLogin = () => ({
    type: SET_LOGIN
})

export const setLogout = () => ({
    type: SET_LOGOUT
})
export const setId = (id) => ({
    type: SET_SETID,
    id: id
})

//Function to go home
export const goToHome = (navigate) => ()=> {
    navigate('/');
}

// create initial value
const initialState = {
    isLogin: false,
    updateId: "",
}

export default function loginCheck(state=initialState, action){
    switch(action.type){
        case SET_LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        case SET_SETID:
            return {
                ...state,
                updateId: action.id
            }   
        default:
            return state
    }
}