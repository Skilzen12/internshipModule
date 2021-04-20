import { AUTH_STORE_PROFILE } from "../actionTypes"

export const storeProfile=(data)=>dispatch=>{
    dispatch({
        type:AUTH_STORE_PROFILE,
        payload:data
    })
    //async code
}