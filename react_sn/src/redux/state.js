import messagesReducer from './messages-reducer';
import profileReducer from './profile_reducer';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hello', like: 30},
                {id: 2, text: 'Bye', like: 50},
            ],
            newPostText: '',
        },
        messagesPage:{
            users: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Petr'},
                {id: 3, name: 'Alex'},
            ],
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Welcome'},
            ],
            newMessageText: '',
        },
    },
    _rerenderEntireTree() {
        console.log('rerenderEntireTree');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._rerenderEntireTree(this._state);
    },
}


export default store;