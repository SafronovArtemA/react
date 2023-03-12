import css from './profile.module.css'
import Post from './posts/posts'
import NewPostContainer from './new_posts/new_posts_container'
import PersonalProfile from './personal/personal'

function Profile(props) {
    let posts = props.store.getState().profilePage.posts
    let postElements = posts.map(post => <Post text={post.text} likes={post.like} />)

    return (
        <div className={css.profile}>
            <PersonalProfile />
            <NewPostContainer store={props.store} />
            <div>My posts</div>
            { postElements }
        </ div>
    )
}

export default Profile