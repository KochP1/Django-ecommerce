// Inicio de sesion
function log_in() {
    const loginForm = document.getElementById('log-in-form');
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://127.0.0.1:8000/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username: document.getElementById('username_login').value,
                password: document.getElementById('password_login').value,
            }),
        });
    
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('userData', JSON.stringify({
                isAuthenticated: true,
                csrfToken: data.csrf_token,
                user: data.user  // { first_name, last_name, email }
            }));

            window.location.href = 'index.html'
            console.log(data)
            // Redirigir o guardar token
        } else {
            alert(data.error);
        }
    });
}

// Registro de usuarios
function regist_user() {
    const registform = document.getElementById('sign-up-form')
    registform.addEventListener('submit', async(event) => {
        event.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/users/regist_user/', {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: document.getElementById('firstname').value,
                last_name: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            }),
        });
    
        const data = await response.json();
    
        try {
            if (response.ok) {
                localStorage.clear()
                window.location.href = 'login.html'
            } else {
                alert('Error al crear usuario!', data.message)
            }
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    
    })
}

async function log_out() {
    try {
        const response = await fetch('http://127.0.0.1:8000/users/log_out/', {
            method: 'POST',
            credentials: 'include',  // 🔑 Envía cookies automáticamente
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),  // Necesario para CSRF
                'Content-Type': 'application/json'
            }
        });

    
        if (response.ok) {
            localStorage.removeItem('userData');
            window.location.href = 'index.html';
        } else {
            const errorData = await response.json();
            alert(errorData.error || 'Error al cerrar sesión');
        }
    } catch (e) {
        console.error('Error:', e);
    }
}

// Función auxiliar para obtener cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}