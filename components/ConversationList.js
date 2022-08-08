import styles from '../styles/conversationList.module.css'
import { useState, useEffect } from "react"
import Image from 'next/image'
import DmCard from './DmCard'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'

import christine from '../assets/christine.png'
import jeffrey from '../assets/jeffrey.png'
import justa from '../assets/justa.png'
import max from '../assets/max.png'


const dummyDms = [{
    id: 1,
    name: 'christine',
    avatar: christine
},
{
    id: 2,
    name: 'jeffrey0723',
    avatar: jeffrey
},
{
    id: 3,
    name: 'Justa',
    avatar: justa
},
{
    id: 4,
    name: '0xMax',
    avatar: max
}]

const ConversationList = () => {
    const [dms, setDms] = useState(dummyDms)
    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input type='search' placeholder='Find or start a conversation' />
            </div>
            <div className={styles.conversationsContainer}>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            src={friends}
                            className={styles.svg}
                            alt='friends'
                        />
                    </div>
                    <p>Friends</p>
                </div>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            src={nitro}
                            className={styles.svg}
                            alt='nitro'
                        />
                    </div>
                    <p>Nitro</p>
                </div>
                <div className={styles.dmTitle}>DIRECT MESSAGES</div>
                {dms.map((dm, index) => (
                    <DmCard
                        key={index}
                        name={dm.name}
                        id={dm.id}
                        avatar={
                            dm.avatar ||
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
                        }
                        status='online'
                    />
                ))}
            </div>
        </div>
    )
}

export default ConversationList