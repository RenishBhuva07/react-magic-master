import { createStore } from "redux";
import RootReducer from "./reducers/RootReducer";
import { store } from "../main";

export function storeData(type: string, payload: any) {
    store.dispatch({
        type: type,
        payload: payload,
    });
}

const ConfigureStore = () => {
    return createStore(RootReducer);
}

export default ConfigureStore;

