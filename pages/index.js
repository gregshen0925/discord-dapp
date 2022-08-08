import styles from '../styles/Home.module.css'
import SideBar from '../components/Sidebar'


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.main}>
        conversation chat view
      </div>
    </div>
  )
}
