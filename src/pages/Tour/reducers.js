const defaultState = {
    NavList:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'NavList':
            return {
                NavList:action.data
            }
        default:
            return state
    }
}