import UserMessage from './user_message/user_message';
import TextMessage from './text_message/text_message';
import css from './messages.module.css';


function Messages() {
    return (
        <div className={css.messages}>
            <div>
                <UserMessage name="Ivan" id="1"/>
                <UserMessage name="Petr" id="2"/>
                <UserMessage name="Alex" id="3"/>
            </div>
            <div>
                <TextMessage message="Hey"/>
                <TextMessage message="Hello"/>
                <TextMessage message="Welcome"/>
            </div>
        </div>
    );
}

export default Messages;