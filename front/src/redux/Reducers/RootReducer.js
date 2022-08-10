
import { combineReducers } from "redux";

import UserReducer from "./UserReducer"
import EventReducer from "./EventReducer"
import CarReducer from "./CarReducer"
import Randoreducer from "./RandoReducer"
import Maisonreducer from "./MaisonReducer"
const RootReducer=combineReducers({ UserReducer,CarReducer,EventReducer,Maisonreducer,Randoreducer,

})
export default RootReducer
