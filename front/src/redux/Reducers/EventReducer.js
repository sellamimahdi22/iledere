import { ADDEVENT, GETEVENTS, GETEVENTS_FAIL, GETEVENTS_SUCCESS } from "../ActionType"



const init ={
    loading:false,
    errors:null,
    events:null,
}
const eventsreducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETEVENTS:
            
            return{
                ...state,loading:true
            }
        case GETEVENTS_SUCCESS:
            return{
                ...state,loading:false,events:payload
            }    
            case GETEVENTS_FAIL:
                return{
                    ...state,loading:false,errors:[...state.errors,payload],
                }
    // case GETONEEVENT:
    //     return{
    //         ...state,
    //     }
        case ADDEVENT:
            return{
                ...state,events:[...state.events,payload]
            }
 
        default:
            return state;
    }
}
export default eventsreducer;