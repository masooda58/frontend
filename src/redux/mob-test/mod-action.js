import {ADD_ROW} from './mob-types'
import {TOGGEL} from './mob-types'
let intial=0;
export const Add_Row = (row) => {
    return {
        type:ADD_ROW,
        payload:
            {
                id:++intial,
                content:row
            }

    }
}
export const Toggel = () => {
    return {
        type:TOGGEL

    }
}

