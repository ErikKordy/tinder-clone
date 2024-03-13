import { useCookies } from 'react-cookie'

const ChatHeader= ({ user }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId')
        removeCookie('AuthToken')
        window.location.reload()
    }

    if (!user || !user.url) {
        return null; 
    }


    return (
    <div className="chat-container-header">
        <div className="profile">
            <div className="img-container">
                <img src={user.url} alt={'photo of ' + user.first_name}/>
            </div>
            <h3>{user.first_name}</h3>
        </div>  
        <i className="logout-icon" onClick={logout}>X</i>

    </div>
    )
}

export default ChatHeader