import {apiCallBegan} from "../api/api-actions";
import {createSlice} from "@reduxjs/toolkit";
import moment from "moment";
const initialLayoutStat={
    sideNavSearch: false,
    showSearchOnMobile:false,
    adminClick:false,
    navigationData: {
        list: [],
        loading:false,
        lastFetch: null
    }

}
const layoutSlice =createSlice({
    name:"layout",
    initialState:initialLayoutStat,
    reducers:{

        NAVREQUSTEDSTART:(layout,action)=>{
            layout.navigationData.loading=true
        },
        NAVREQUSTEDEND:(layout,action)=>{
            layout.navigationData.loading=false
        },
        TOGGLESIDENAVSEARCH:(layout,action)=>{
            layout.sideNavSearch=!layout.sideNavSearch

        },
        TOGGLESHOWSEARCONMOBIL:(layout,action)=>{
            layout.showSearchOnMobile=!layout.showSearchOnMobile
        },
        ADMINCLICK:(layout,action)=>{
            layout.adminClick=action.payload.permit
        },
        NAVIGATIONDATA:(layout,action )=>{

            layout.navigationData.list=action.payload
            layout.navigationData.lastFetch=Date.now()

        },




    }
})
export const {
    TOGGLESIDENAVSEARCH,ADMINCLICK,
    TOGGLESHOWSEARCONMOBIL,NAVIGATIONDATA,
    NAVREQUSTEDSTART,NAVREQUSTEDEND}=layoutSlice.actions
export default layoutSlice.reducer


//actions for Ui
export const loadingNavData=()=>(dispatch,getState)=>{
    const {lastFetch}=getState().layout.navigationData
    if(lastFetch !==null) {
        const defMoment = moment().diff(lastFetch, "minutes")
        if (defMoment < 2) return
    }
    dispatch( apiCallBegan({
        url:"/navigation",
        onSuccess:NAVIGATIONDATA.type,
        onStart:NAVREQUSTEDSTART.type,
        onFinish:NAVREQUSTEDEND.type

    }))
}






// تابع زیر در زمانی که نیاز به کش داده نداشتیم
// export const loadingNavData=()=>apiCallBegan({
//     url:"/navigation",
//     onSuccess:NAVIGATIONDATA.type,
//     onStart:NAVREQUSTEDSTART.type,
//     onFinish:NAVREQUSTEDEND.type
// });