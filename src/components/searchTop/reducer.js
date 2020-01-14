const defaultList = {
    searchList :[]
}

export default (state=defaultList,action)=>{
    switch(action.type){
        case "searchList":
            console.log(action,123)
            return {
                searchList:action.data,
                val: action.val,
                isfocus: action.isfocus
            }
        default:
            return state
    }
}