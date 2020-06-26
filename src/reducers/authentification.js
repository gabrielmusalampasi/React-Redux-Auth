import { SET_AUTENTIFICATION} from "../actions/action-types"
const initialState = {
    isLoggIn: false
}

export default function AuthentificationReducer(state = initialState, action){
    if (action.type === SET_AUTENTIFICATION) {
        return {
            isLoggIn: action.payload
        }
    } else {
        return state;
    }
}