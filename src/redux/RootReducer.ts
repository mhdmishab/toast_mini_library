import { combineReducers } from "redux";
import ToastSlice from "./reducers/ToastSlice";


const rootReducer=combineReducers({
    toastReducer:ToastSlice
   
})

export default rootReducer;