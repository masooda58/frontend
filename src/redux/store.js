
import{configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import apiHandler from "./middleware/api-handler";
import {actionConsoleLog} from "./middleware/action-consoleLog";

export const  store= configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(),actionConsoleLog,apiHandler]
})
