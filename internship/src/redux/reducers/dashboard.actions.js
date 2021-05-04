import { DashBoard } from "../actionTypes";

const initialState={postings:[]};

export const dashboardReducer = (state=initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case DashBoard.GET_POSTINGS:
            return{
                ...state,
                postings:payload
            }
        default: return {...state};
    }
}