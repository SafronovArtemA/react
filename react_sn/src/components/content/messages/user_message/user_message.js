import css from './user_message.module.css';
import {NavLink} from 'react-router-dom'


function userMessage(props) {
    return <NavLink to={"/messages/" + props.id}>
            <div className={css.message}>
                <img src="https://avatars.mds.yandex.net/i?id=d9efaadcf247dc8a0f8b0545eccf2608-5366304-images-thumbs&n=13"></img>
                {props.name}
            </div>
        </NavLink>
}

export default userMessage;