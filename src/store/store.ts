import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from "./reducers/counterReducer";
import favouritesReducer from "./reducers/favouritesReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    favourites: favouritesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
));
