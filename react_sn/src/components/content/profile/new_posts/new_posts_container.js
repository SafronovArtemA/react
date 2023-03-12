import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/profile_reducer'
import NewPost from './new_posts'


function newPostContainer(props) {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
       <NewPost addPost={addPost} onPostChange={onPostChange}
       newPostText={props.store.getState().profilePage.newPostText} />
    )
}

export default newPostContainer;