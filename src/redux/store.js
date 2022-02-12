import {createStore} from "redux";
import {mobReducer} from "./mob-test/mob-reducer";

const store =createStore (mobReducer)
export default store