import {combineReducers} from "redux";
import amountReducer from "./amountReducer";
import pageReducer from "./pageReducer";
import printStringReducer from "./printStringReducer";

const reducer=combineReducers({
    amount:amountReducer,
    pages:pageReducer,
    pstring:printStringReducer
})

export default reducer