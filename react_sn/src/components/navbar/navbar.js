import css from './navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className={css.Navbar}>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/massages">Messages</NavLink>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar