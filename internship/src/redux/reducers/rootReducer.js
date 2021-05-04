import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import { dashboardReducer } from "./dashboard.actions";
import {userReducer} from "./user.reducer";
const rootReducer =combineReducers({
    auth:authReducer,
    user:userReducer,
    dashboard:dashboardReducer
});

export default rootReducer