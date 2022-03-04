import{combineReducers} from "redux";
import layoutSlice from "./slice/layout-slice";

export default combineReducers({
    layout:layoutSlice,

})