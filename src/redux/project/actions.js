import{SIDE_NAV_SEARCH} from './types'
import{MAIN_MOBIL_SEARCH,ADMIN_CLICK} from './types'
export const sideNavSearch = () => {
 return {
     type:SIDE_NAV_SEARCH

 }
}


export const mainMobileSearch  = () => {
 return {
    type:MAIN_MOBIL_SEARCH
 };
};
export const adminClick  = (item) => {
    return {
        type:ADMIN_CLICK,
        payload:item

    };
};




