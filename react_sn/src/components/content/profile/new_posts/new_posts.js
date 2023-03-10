import React from 'react';

function newPost(props) {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div>
        <div>New post</div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add</button>
        </div>
    )
}

export default newPost;