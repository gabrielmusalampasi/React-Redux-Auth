import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
//importation librairie pour redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/app";
import {BrowserRouter} from "react-router-dom";
import reducers from "./reducers";
import {action_middleware} from "./middlewares/action_middleware";


//creation du store avec dedans le middleware thunk
const createStoreWithMiddleware = applyMiddleware(thunk,action_middleware)(createStore);
ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
registerServiceWorker();