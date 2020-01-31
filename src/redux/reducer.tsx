import {Reducer} from 'react';
const initialState={
    randomObj:{},
    nameObj:{}

}
const randomPinReducer:Reducer<any,any>=(state=initialState,action:any)=>{
    console.log(action.type);
    switch (action.type){
        case 'SAVE_STATE' :
            var obj = {...state.randomObj}
            var obj1 = {...state.nameObj};
            obj[action.arr[0]] = action.arr;
            obj1[action.arr[0]] = "";
            return {
                ...state,
                 randomObj: obj,
                 nameObj: obj1
            }
        case 'ON_CHANGE_HANDLER':
            var objChange = {...state.nameObj};
            objChange[action.index] = action.name;
            console.log(objChange);
            return {
                ...state,
                nameObj: objChange
            }
        case 'ON_DELETE_HANDLER' : 
            var objDelete = {...state.randomObj}
            var objDelete1 = {...state.nameObj};
            delete objDelete[action.index];
            delete objDelete1[action.index];
            return{
                ...state,
                randomObj: objDelete,
                nameObj: objDelete1
            }
    }

    return state;
}


export default randomPinReducer;
