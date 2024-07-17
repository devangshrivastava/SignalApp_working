import React, { useEffect, useState } from 'react'
import axios from 'axios'



const ChatPage = () => {

    const [chats, setChats] = useState([])

    // const fetchChat = async () => {
    //     const response = await axios.get('/api/chat')
    //     setChats(response.data)
    //     console.log(response.data)
    // }

    // useEffect(() => {
    //     fetchChat()
    // }, [])

  return (
    <div>
        ChatPage
        {/* <ul>
            {chats.map(chat => (
                <li key={chat._id}>{chat.chatName}</li>
            ))}
        </ul> */}
    </div>
  )
}

export default ChatPage
