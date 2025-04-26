import { Link } from 'react-router-dom'
import './navbar.css'


export const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navList'>
                <li className="navItem">
                    <Link to={"/"} className="navLink">
                        <img src="/images/logo.svg" alt="Pixelated Paradise" className='imgLogo'/>
                    </Link>
                </li>
                <li className="navItem"><Link to={"/"} className="navLink">Home</Link></li>
                <li className="navItem"><Link to={"Nintendo"} className="navLink">Nintendo</Link></li>
                <li className="navItem"><Link to={""} className="navLink">Sega</Link></li>
                <li className="navItem"><Link to={""} className="navLink">Sony</Link></li>
            </ul>

            <div className='navOptions__container'>
                <ul className='options-navList navList'>
                    <li className="options-navLink options-navItem">
                        <i className='fa-solid fa-moon'></i>
                    </li>
                    <li className="options-navLink options-navItem">
                        <i className='fa-solid fa-cart-shopping'></i>
                    </li>
                    <li className="options-navLink options-navItem dropdown">
                        <i className='fa-solid fa-user' role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>

                        <ul className='dropdown-menu'>
                            <li><a className="dropdown-item" id="log-in">Log in</a></li>
                            <li><a className="dropdown-item" href="#" id="user-settings">Settings</a></li>
                            <li className="dropdown-divider__nav-item" id="drop-divider">
                                <hr className="dropdown-divider"></hr>
                            </li>
                            <li><a className="dropdown-item" id="log-out">Log out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}