import{SIDE_NAV_SEARCH} from './types'

const initialState={
 sideNavSearchState: false

}
export const mainReducer = (state=initialState,action) => {
 switch(action.type) {
  case SIDE_NAV_SEARCH:
   return{
    sideNavSearchState: !state.sideNavSearchState
  }
   default:return state

 }
};


