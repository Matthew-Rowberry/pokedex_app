import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import counterReducer from "./reducers/counterReducer";
import favouritesReducer from "./reducers/favouritesReducer";
import paginationReducer from "./reducers/paginationReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    favourites: favouritesReducer,
    pagination: paginationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));
