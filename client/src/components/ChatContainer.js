import { useState } from "react"
import ChatDisplay from "../components/ChatDisplay"
import ChatHeader from "../components/ChatHeader"
import MatchesDisplay from "../components/MatchesDisplay"



const ChatContainer = ({ user }) => {
    const [clickedUser, setCLickedUser] = useState(null)

    console.log('clickUser', clickedUser)
    
    return (
    <div className="chat-container">
        <ChatHeader user={user}/>
        <div>
            <button className="option" onClick={() => setCLickedUser(null)}>Matches</button>
            <button className="option" disabled={!clickedUser}>Chat</button>
        </div>

        {!clickedUser && <MatchesDisplay matches={user.matches} setCLickedUser={setCLickedUser}/>}

        {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}

    </div>
    )
}

export default ChatContainer