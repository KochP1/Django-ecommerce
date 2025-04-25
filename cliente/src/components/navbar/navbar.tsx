import './navbar.css'


export const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navList'>
                <li className="navItem">
                    <a href="#" className="navLink">
                        <img src="../../assets/images/logo.svg" alt="Pixelated Paradise" className='imgLogo'/>
                    </a>
                </li>
                <li className="navItem"><a href="#" className="navLink">Nintendo</a></li>
                <li className="navItem"><a href="#" className="navLink">Sega</a></li>
                <li className="navItem"><a href="#" className="navLink">Sony</a></li>
            </ul>
        </nav>
    )
}