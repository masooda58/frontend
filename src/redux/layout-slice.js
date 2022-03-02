import {createSlice} from "@reduxjs/toolkit";

const initialLayoutStat={
    sideNavSearch: false,
    showSearchOnMobile:false,
    adminClick:false
}
const layoutSlice =createSlice({
    name:"layoutslice",
    initialState:initialLayoutStat,
    reducers:{
     TOGGLESIDENAVSEARCH:(state,action)=>{
         state.sideNavSearch=!state.sideNavSearch

     },
     TOGGLESHOWSEARCONMOBIL:(state,action)=>{
         state.showSearchOnMobile=!state.showSearchOnMobile
     },
     ADMINCLICK:(state,action)=>{
         state.adminClick=action.payload.permit
     }

    }
})
export const {TOGGLESIDENAVSEARCH,ADMINCLICK,TOGGLESHOWSEARCONMOBIL}=layoutSlice.actions
export default layoutSlice.reducer