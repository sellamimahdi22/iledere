import { ADDCAR, GETCARS, GETCARS_FAIL, GETCARS_SUCCESS } from "../ActionType"



const init ={
    loading:false,
    errors:null,
    Cars:null,
}
const carsreducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETCARS:
            
            return{
                ...state,loading:true
            }
        case GETCARS_SUCCESS:
            return{
                ...state,loading:false,Cars:payload
            }    
            case GETCARS_FAIL:
                return{
                    ...state,loading:false,errors:[...state.errors,payload],
                }
    // case GETONECHAMBRE:
    //     return{
    //         ...state,
    //     }
        case ADDCAR:
            return{
                ...state,chambres:[...state.Cars,payload]
            }
        // case DELETECHAMBRES:
        //     return{
        //         ...state,c:state.chambres.filter(el=>el._id!==payload)
        //     }    
        // case EDITCHAMBRES:    
        // return{
        //     ...state,chambres:state.chambres.map((el)=>(el._id===payload._id?payload:el))
        // }
        default:
            return state;
    }
}
export default carsreducer;