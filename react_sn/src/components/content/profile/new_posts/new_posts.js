import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/state'

function newPost(props) {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div>
        <div>New post</div>
        <textarea onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Add</button>
        </div>
    )
}

export default newPost;