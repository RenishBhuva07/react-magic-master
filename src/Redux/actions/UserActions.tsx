import { storeData } from "../ConfigureStore";
import { USER_STORE_DATA_TYPES } from "../Types";

export const setUserDetails = (userData: any) => {
    storeData(USER_STORE_DATA_TYPES.USER_DETAILS, userData);
};