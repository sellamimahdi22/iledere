import { ADDHOTEL, GETHOTEL, GETHOTEL_FAIL, GETHOTEL_SUCCESS } from "../ActionType"



const init ={
    loading:false,
    errors:null,
    hotels:null,
}
const hotelsreducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETHOTEL:
            
            return{
                ...state,loading:true
            }
        case GETHOTEL_SUCCESS:
            return{
                ...state,loading:false,hotels:payload
            }    
            case GETHOTEL_FAIL:
                return{
                    ...state,loading:false,errors:[...state.errors,payload],
                }
    // case GETONEHOTEL:
    //     return{
    //         ...state,
    //     }
        case ADDHOTEL:
            return{
                ...state,hotels:[...state.hotels,payload]
            }
 
        default:
            return state;
    }
}
export default hotelsreducer;