const defaultState = {
    list:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'getState':
            return {
                list:action.data
            }
        default:
            return state
    }
}