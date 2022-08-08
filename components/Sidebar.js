import styles from "../styles/sidebar.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import tind3r from "../assets/Tind3r.png"
import club from "../assets/讀書會啦ˋˊ.png"
import RoomAvatar from "./RoomAvatar"

const dummyChannels = [{
    id: 1,
    roomName: 'Tind3r',
    avatar: tind3r
},
{
    id: 2,
    roomName: '讀書會啦ˋˊ',
    avatar: club
}]



const Sidebar = () => {
    const router = useRouter()
    const [channels, setChannels] = useState(dummyChannels)

    useEffect(() => {
        async function get() {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/getchannels`,
                )

                const data = await response.json()
                setChannels(data)

                router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
            } catch (error) {
                console.error(error)
            }
        }
        get()
    }, [])

    return (
        <div className={styles.wrapper}>{
            channels.map((channel, index) => (
                <RoomAvatar
                    key={index}
                    id={channel.id}
                    avatar={channel.avatar}
                    roomName={channel.roomName} />
            ))
        }
        </div>
    )
}

export default Sidebar