import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/roomAvatar.module.css'

const RoomAvatar = ({ id, avatar, roomName }) => {
    const router = useRouter()

    const handleChangeUrl = () => {
        router.push(`?channel=${id}&name=${roomName}`)
    }

    return (
        <div className={styles.wrapper} onClick={handleChangeUrl}>
            <div className={styles.roomAvatar}>
                <Image
                    src={avatar}
                    className={styles.roomAvatarImage}
                    height={48}
                    width={48}
                    alt={roomName}
                />
            </div>
        </div>
    )
}

export default RoomAvatar