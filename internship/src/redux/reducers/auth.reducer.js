import { AUTH_STORE_PROFILE } from "../actionTypes";

export const authReducer = (state={},action)=>{
    switch(action.type){
        case AUTH_STORE_PROFILE:
            return{
                ...state,
                profileData:{
                    ...state?.profileData,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}