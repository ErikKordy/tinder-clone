import colorLogo from '../images/tinder color logo.png'
import whiteLogo from '../images/tinder white logo.png'

const Nav = ({minimal, authToken}) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
            </div>

            {!authToken && !minimal && <button className='nav-button'>Log in</button>}
        </nav>
    )
}

export default Nav