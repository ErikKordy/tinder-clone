import TinderCard from "react-tinder-card"
import { useState } from "react"
import ChatContainer from '../components/ChatContainer'
import ChatDisplay from "../components/ChatDisplay"
import ChatHeader from "../components/ChatHeader"
import MatchesDisplay from "../components/MatchesDisplay"

const Dashboard = () => {
    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://images.squarespace-cdn.com/content/v1/5d6aacb29e0b8f0001610a06/1696903638201-WWXSFZYD87UQ8J0EGQM4/shutterstock_759361057.jpg?format=1000w'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://images.squarespace-cdn.com/content/v1/5d6aacb29e0b8f0001610a06/1696903638201-WWXSFZYD87UQ8J0EGQM4/shutterstock_759361057.jpg?format=1000w'
        },
        {
            name: 'Monica Hall',
            url: 'https://images.squarespace-cdn.com/content/v1/5d6aacb29e0b8f0001610a06/1696903638201-WWXSFZYD87UQ8J0EGQM4/shutterstock_759361057.jpg?format=1000w'
        },
        {
            name: 'Jared Dunn',
            url: 'https://images.squarespace-cdn.com/content/v1/5d6aacb29e0b8f0001610a06/1696903638201-WWXSFZYD87UQ8J0EGQM4/shutterstock_759361057.jpg?format=1000w'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://images.squarespace-cdn.com/content/v1/5d6aacb29e0b8f0001610a06/1696903638201-WWXSFZYD87UQ8J0EGQM4/shutterstock_759361057.jpg?format=1000w'
        }
    ]

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            <ChatContainer />
            <div className="swipe-container">
                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }}
                                className='card'>

                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/> }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard