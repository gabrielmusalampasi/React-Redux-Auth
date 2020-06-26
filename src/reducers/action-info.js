import { INCREMENT_ACTION_COUNT } from "../actions/action-types"
const initialState = {
    actionCount:0
}

export default function ActionInfoReducer(state = initialState, action){
    if (action.type === INCREMENT_ACTION_COUNT) {
        return {
            actionCount: state.actionCount + 1
        }
    } else {
        return state;
    }
}