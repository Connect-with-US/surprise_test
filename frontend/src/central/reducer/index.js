import {combineReducers} from "redux"


import authReducer from "../slices/authslice"
 import AiQuestionReducer from "../slices/Aiquestionslice"

const rootReducer=combineReducers({
    auth:authReducer,
    AiQuestion:AiQuestionReducer,
})

export default rootReducer;