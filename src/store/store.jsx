import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
let reducer=(state=[],action)=>{
 switch(action.type){
     case "USER_APP" :
      state=JSON.parse(JSON.stringify(action.data))
      return [...state];
      default:
      return [...state]    
 }
}
let reducers=combineReducers({
    reducer
})
let store=createStore(reducers,applyMiddleware(thunk))
export default store