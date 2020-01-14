const initState = {
    sceneList:[]
}
const reducer = (state,action)=>{
    switch(action.type){
        case "SceneList":
            console.log(123)
            return {
                sceneList:[1,2,3]
            }
        default:
            return state
    }
}
export {
    initState,
    reducer
}