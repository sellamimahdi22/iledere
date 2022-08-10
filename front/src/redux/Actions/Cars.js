import axios from "axios";

import {ADDCAR, GETCARS, GETCARS_FAIL, GETCARS_SUCCESS, GETONECAR} from "../ActionType";




export const getcarss=()=>async(dispatch)=>{
    dispatch({
        type:GETCARS,
    })
try {
    const {data} =await axios.get("/cars/get-cars")
    // console.log(data);
    dispatch({
        type:GETCARS_SUCCESS,
        payload:data,
    })
} catch (error) {
    dispatch({
        type:GETCARS_FAIL,
        payload:error.response.data,
    })
}
}

export const getonecar=()=>async(dispatch)=>{
    try {
        const res =await axios.get("/getonecar")
        dispatch({
            type:GETONECAR,
            payload:res.data,
        })
    } catch (error) {
        alert('get one error')
    }
}
export const addcar=(newcar)=>async(dispatch)=>{
    try {
        const res =await axios.post("/cars/add-car",newcar)
        dispatch({

            type: ADDCAR,
            payload:res.data,
        })
    } catch (error) {
        // alert("add error")
  console.log(error.response.data)      
        
}}