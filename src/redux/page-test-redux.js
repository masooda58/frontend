import React, {useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import {Add_Row} from "./mob-test/mod-action";

function PageTestRedux(props) {
    const number = useSelector( state=>state.data)
    const [inputText,setInputText]=useState()
    const dispatch=useDispatch()
    return (
        <div>
            <input type="text" value={inputText} onChange={(event)=>setInputText(event.target.value)}/>
            <button onClick={()=>dispatch(Add_Row(inputText))}> buy</button>
         <ul>
             {number.map((item,index)=>{
                 return(
                     <li key={index}>{item.id} {item.content}</li>
                 )
             })}
         </ul>
        </div>
    );
}

export default PageTestRedux;