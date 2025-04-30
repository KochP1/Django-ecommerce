import { Link } from 'react-router-dom'
import { UserIcon } from '../userIcon/userIcon'
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
                <li className="navItem"><Link to={"/Nintendo"} className="navLink">Nintendo</Link></li>
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

                    <UserIcon/>
                </ul>
            </div>
        </nav>
    )
}