import { ADDMAISON, GETMAISON, GETMAISON_FAIL, GETMAISON_SUCCESS } from "../ActionType"



const init ={
    loading:false,
    errors:null,
    maisons:null,
}
const maisonsreducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETMAISON:
            
            return{
                ...state,loading:true
            }
        case GETMAISON_SUCCESS:
            return{
                ...state,loading:false,maisons:payload
            }    
            case GETMAISON_FAIL:
                return{
                    ...state,loading:false,errors:[...state.errors,payload],
                }
  
        case ADDMAISON:
            return{
                ...state,maisons:[...state.maisons,payload]
            }
 
        default:
            return state;
    }
}
export default maisonsreducer;