import {SIDE_NAV_SEARCH, MAIN_MOBIL_SEARCH, ADMIN_CLICK} from './types'

const initialState={
   sideNavSearchState: false,
 showMobilSearch:false,
 adminClick:false

}
export const mainReducer = (state=initialState,action) => {
 switch(action.type) {
  case SIDE_NAV_SEARCH:
   return{
    ...state,
    sideNavSearchState: !state.sideNavSearchState
  }
  case MAIN_MOBIL_SEARCH:
   return{
    ...state,
    showMobilSearch: !state.showMobilSearch

   }
  case ADMIN_CLICK:

   return{
    ...state,
     adminClick: action.payload
   }

   default:return state

 }
};


