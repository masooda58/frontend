import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {adminClick} from './redux/project/actions'
function AdminContent() {
    const history = useHistory()
    const dispatch=useDispatch()
    const handelclick=()=>{
        dispatch(adminClick(false))
        history.push("/")
    }
    return (
        <div>

        <button onClick={handelclick}> home</button>
        </div>
    );
}

export default AdminContent;