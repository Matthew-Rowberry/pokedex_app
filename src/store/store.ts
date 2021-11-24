import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import counterReducer from "./reducers/counterReducer";
import favouritesReducer from "./reducers/favouritesReducer";
import paginationReducer from "./reducers/paginationReducer";
import speciesReducer from "./reducers/speciesReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    favourites: favouritesReducer,
    pagination: paginationReducer,
    species: speciesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));
