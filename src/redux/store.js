import {createStore} from "redux";
import {mainReducer} from "./project/reducer";


const store =createStore (mainReducer)
export default store