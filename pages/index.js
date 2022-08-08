import styles from '../styles/Home.module.css'
import SideBar from '../components/Sidebar'
import ConversationList from '../components/conversationList'


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.main}>
        <ConversationList />
      </div>
    </div>
  )
}
