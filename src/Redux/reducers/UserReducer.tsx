import { USER_STORE_DATA_TYPES } from "../Types";

export interface Action {
    type: string;
    payload: any;
}

export const INIT_STATE = {
    userDetails: undefined,
};

export default (state = INIT_STATE, action: Action) => {
    switch (action.type) {
        case USER_STORE_DATA_TYPES.USER_DETAILS:
            return { ...state, userDetails: action.payload };
    }
    return state;
};