import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/dmCard.module.css'

const DmCard = ({ name, status, avatar, id }) => {
    const router = useRouter()

    const handleChangeUrl = () => {
        router.push(`?conversation=${id}&name=${name}`)
    }

    return (
        <div className={styles.dmCard} onClick={handleChangeUrl}>
            <div className={styles.dmAvatarContainer}>
                <Image
                    src={avatar}
                    className={styles.dmAvatar}
                    height={48}
                    width={48}
                    alt={name}
                />
                <div className={styles.dmCardStatus} id={status} />
            </div>
            <p className={styles.dmCardName}>{name}</p>
        </div>
    )
}

export default DmCard