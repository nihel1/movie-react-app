const GET_COUNT = 'GET_COUNT';
const GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS';
const GET_COUNT_ERROR = 'GET_COUNT_ERROR';

const initialState = {
    count: {
        loading: false,
        data: null,
        error: null
    }
}

export const getCount = callback => async dispatch => {
    dispatch({type: GET_COUNT})
    try {
        const response = await callback();
        let data = response.data;
        if(data.length>0){
            data = data[0]
        }else {
            data = {reco_count: 0}
        }
        dispatch({
            type: GET_COUNT_SUCCESS,
            data: data
        })

    }
    catch(e) {
        dispatch({type: GET_COUNT_ERROR})
    }
} 

export default function recoCount(state=initialState, action) {
    switch(action.type) {
        case GET_COUNT:
            return {
                loading: true,
                data: null,
                error: null
            };
        case GET_COUNT_SUCCESS:
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case GET_COUNT_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            return state;
    }
}