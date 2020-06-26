import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import ActionInfoReducer from "./action-info";
const rootReducer = combineReducers({
    authentification : AuthentificationReducer,
    actionInfos: ActionInfoReducer

});

export default rootReducer;