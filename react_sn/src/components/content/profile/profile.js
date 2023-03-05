import css from './profile.module.css'
import Post from './posts/posts'

function Profile() {
    return (
        <div>
            <div className={css.new_post}>
            <div>New post</div>
            <textarea></textarea>
            <button>Add</button>
            </div>
            <div className={css.profile}>
                <div>My posts</div>
                <Post text='Hello' likes="30" />
                <Post text='Bye' likes="50" />
            </div>
        </ div>
    )
}

export default Profile