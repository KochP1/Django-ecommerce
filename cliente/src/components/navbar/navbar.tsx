import './navbar.css'


export const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navList'>
                <li className="navItem">
                    <a href="#" className="navLink">
                        <img src="/logo.svg" alt="Pixelated Paradise" className='imgLogo'/>
                    </a>
                </li>
                <li className="navItem"><a href="#" className="navLink">Nintendo</a></li>
                <li className="navItem"><a href="#" className="navLink">Sega</a></li>
                <li className="navItem"><a href="#" className="navLink">Sony</a></li>
            </ul>

            <div className='navOptions__container'>
                <ul className='options-navList navList'>
                    <li className="options-navLink navItem">
                        <i className='fa-solid fa-moon'></i>
                    </li>
                    <li className="options-navLink navItem">
                        <i className='fa-solid fa-cart-shopping'></i>
                    </li>
                    <li className="options-navLink navItem dropdown">
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