import css from './profile.module.css'
import Post from './posts/posts'
import NewPost from './new_posts/new_posts'
import PersonalProfile from './personal/personal'

function Profile(props) {

    let postElements = props.profile.posts.map(post => <Post text={post.text} likes={post.like} />)

    return (
        <div className={css.profile}>
            <PersonalProfile />
            <NewPost dispatch={props.dispatch} newPostText={props.profile.newPostText} />
            <div>My posts</div>
            { postElements }
        </ div>
    )
}

export default Profile