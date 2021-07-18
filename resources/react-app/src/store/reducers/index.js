import { combineReducers } from "redux";
import ticketsReducer from "./ticketsReducer";

export default combineReducers({
 tickets:ticketsReducer
})