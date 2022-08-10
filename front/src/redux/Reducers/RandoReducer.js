import { ADDRANDO, GETRANDOS, GETRANDOS_FAIL, GETRANDOS_SUCCESS } from "../ActionType"



const init ={
    loading:false,
    errors:null,
    randos:null,
}
const randosreducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETRANDOS:
            
            return{
                ...state,loading:true
            }
        case GETRANDOS_SUCCESS:
            return{
                ...state,loading:false,randos:payload
            }    
            case GETRANDOS_FAIL:
                return{
                    ...state,loading:false,errors:[...state.errors,payload],
                }
    // case GETONERANDO:
    //     return{
    //         ...state,
    //     }
        case ADDRANDO:
            return{
                ...state,randos:[...state.randos,payload]
            }
        
        default:
            return state;
    }
}
export default randosreducer;