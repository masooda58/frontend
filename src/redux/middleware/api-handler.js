import axios from "axios";
import * as actions  from "../api/api-actions"
const apiHandler = ({dispatch,getState})=>next=>async action=>{

    if(action.type!== actions.apiCallBegan().type)  return   next(action);


    const {url,onSuccess,onError,method,onStart,onFinish}=action.payload
    if (onStart){
        dispatch({type:onStart})
    }

    next(action)
    try{
        const response = await axios.request(
            {
                baseURL: "http://localhost:9001/api",
                url,
                method
            })
        //genral
        dispatch(actions.apiCallSuccess(response.data))
        //if select onsuccess note onsuccess is string
        if(onSuccess){
            dispatch({type: onSuccess, payload: response.data})
        }
        if(onFinish) {
            dispatch({type: onFinish})
        }
        // خط بالا نیاز نیست اگر داخل خود slice  مدیریت شود
    } catch (error){
        // اگر بجای error.message  از error  خال یاستفاده کنیم خطای سریالایز در کنسول مواج می شیم
        // general error
        dispatch(actions.apiCallFailed(error.message))
        // select error
        if (onError){
            dispatch({type: onError, payload: error.message})
        }
        if(onFinish) {
            dispatch({type: onFinish})
        }
    }



}
export default apiHandler