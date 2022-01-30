import { IS_ERROR, IS_LOADING, FETCH_SUCCESS} from "./userAction";

const initialState = {
    isLoading : false,
    user : [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading : true 
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user : action.payload,
                error: ''
            }
        case IS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }    
        default:
            return state
            
    }
}