// Inicio de sesion
let user_data = undefined
function log_in() {
    const loginForm = document.getElementById('log-in-form');
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://127.0.0.1:8000/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',  //cookies/CSRF
            body: JSON.stringify({
                username: document.getElementById('username_login').value,
                password: document.getElementById('password_login').value,
            }),
        });
    
        const data = await response.json();
        
        if (response.ok) {
            window.location.href = 'landing.html'
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
                window.location.href = 'index.html'
            } else {
                alert('Error al crear usuario!', data.message)
            }
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    
    })
}
