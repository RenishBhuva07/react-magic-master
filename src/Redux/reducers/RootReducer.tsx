import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    userData: UserReducer,
});

export default (state: any, action: any) => {
    return rootReducer(state, action);
};