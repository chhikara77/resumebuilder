import { combineReducers } from "redux";
import Contactpagereducer from "./Contactpagereducer";
import Skillreducer from "./Skillreducer";

const Combinereducer = combineReducers({
    Skillreducer,
    Contactpagereducer
})
export default Combinereducer;