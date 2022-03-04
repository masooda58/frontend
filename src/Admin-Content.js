import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {ADMINCLICK} from "./redux/slice/layout-slice";
function AdminContent() {
    const history = useHistory()
    const dispatch=useDispatch()
    const handelclick=()=>{
        dispatch(ADMINCLICK({permit:false}))
        history.push("/")
    }
    return (
        <div>

        <button onClick={handelclick}> home</button>
        </div>
    );
}

export default AdminContent;