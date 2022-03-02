// import {createStore} from "redux";
// import {mainReducer} from "./project/reducer";
//
//
// const store =createStore (mainReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export default store
import{configureStore} from "@reduxjs/toolkit";
import layoutSlice from "./layout-slice";
export const  store= configureStore({
    reducer:layoutSlice

})
