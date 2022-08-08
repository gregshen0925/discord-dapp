import styles from '../styles/chatView.module.css'
import ChatHeader from './ChatHeader'

const ChatView = () => {
    return (
        <div className={styles.chatView}>
            <ChatHeader />
            <div className={styles.messagesContainer}></div>
        </div>
    )
}

export default ChatView