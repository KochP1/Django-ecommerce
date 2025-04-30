import { Link, useNavigate } from 'react-router-dom'
import './userIcon.css'
import { useState } from 'react';

export const UserIcon = () => {

    function getCookie(name: string): string | undefined {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        
        if (parts.length === 2) {
            const cookiePart = parts.pop();
            if (cookiePart) {
                return cookiePart.split(';').shift();
            }
        }
        return undefined;
    }

    const navigate = useNavigate();
    // Estado para manejar la respuesta
    const [apiError, setApiError] = useState<Error | null>(null);
    const onClick = async () => {
            setApiError(null);
            
            try {
                const response = await fetch('http://127.0.0.1:8000/users/log_out/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                if (!response.ok) {         
                    throw new Error(`HTTP error! status: ${response.status }`);
                }
                localStorage.removeItem('userData');
                navigate('/')
            } catch (error) {
                setApiError(error as Error);
                console.log(error)
            }
        };
    
        if (apiError) {
            return(
                <div>Error</div>
            )
        }
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
                    <li><button className="dropdown-item" id="log-out" onClick={onClick}>Log out</button></li>
                </ul>
            </li>
        )
    }

    return (
        <li className="options-navLink options-navItem dropdown">
            <i className='fa-solid fa-user' role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul className='dropdown-menu'>
                <li><Link     to={"/Login"} className="dropdown-item">Sign in</Link></li>
            </ul>
        </li>
    )
}