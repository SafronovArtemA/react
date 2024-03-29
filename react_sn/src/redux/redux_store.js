import {combineReducers, createStore} from 'redux'
import messagesReducer from './messages-reducer';
import profileReducer from './profile_reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})


let store = createStore(reducers)


export default store