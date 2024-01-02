import {combineReducers} from "redux"


import authReducer from "../slices/authslice"
 

const rootReducer=combineReducers({
    auth:authReducer,
})

export default rootReducer;