import{SIDE_NAV_SEARCH,MAIN_MOBIL_SEARCH} from './types'

const initialState={
 sideNavSearchState: false,
 showMobilSearch:false

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

   default:return state

 }
};


