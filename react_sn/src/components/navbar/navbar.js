import css from './navbar.module.css'
import {NavLink} from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? css.activeLink : undefined;

function Navbar() {
    return (
        <nav className="navbar">
            <div className={css.item}>
                <div>
                    <NavLink to="/profile" className={setActive}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/messages" className={setActive}>Messages</NavLink>
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