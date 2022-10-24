import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducers from "../client/reducers";
//we dont need Provider for the server

export default ()=>{
    const store=createStore(reducers,{},applyMiddleware(thunk))

    return store
}