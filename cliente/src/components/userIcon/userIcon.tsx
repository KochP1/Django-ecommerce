import { Link } from 'react-router-dom'
import './userIcon.css'

export const UserIcon = () => {
    const userData = localStorage.getItem('userData')
    let name: string;

    if (userData) {
        const user = JSON.parse(userData)
        name = user?.user?.first_name
        
        return(
            <li className="options-navLink options-navItem dropdown">
                <div className='userIcon__container' role="button" data-bs-toggle="dropdown" aria-expanded="false">{ name[0] }</div>
                <ul className='dropdown-menu'>
                    <li><Link to={""} className="dropdown-item" id="user-settings">Settings</Link></li>
                    <li className="dropdown-divider__nav-item" id="drop-divider">
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><button className="dropdown-item" id="log-out">Log out</button></li>
                </ul>
            </li>
        )
    }

    return (
        <li className="options-navLink options-navItem dropdown">
            <i className='fa-solid fa-user' role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul className='dropdown-menu'>
                <li><Link     to={"/Login"} className="dropdown-item">Sign in</Link></li>
                <li><a className="dropdown-item" href="#" id="user-settings">Settings</a></li>
                <li className="dropdown-divider__nav-item" id="drop-divider">
                    <hr className="dropdown-divider"></hr>
                </li>
                <li><a className="dropdown-item" id="log-out">Log out</a></li>
            </ul>
        </li>
    )
}