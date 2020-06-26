import { SET_AUTENTIFICATION,INCREMENT_ACTION_COUNT} from "./action-types"

export function setAuthentification (isLoggIn){
    return function (dispatch) {
        dispatch({
            type: SET_AUTENTIFICATION,
            payload: isLoggIn
        });
        dispatch(incrementActionCount())
    };
}

export function incrementActionCount (){
    return {
        type: INCREMENT_ACTION_COUNT
    };
}