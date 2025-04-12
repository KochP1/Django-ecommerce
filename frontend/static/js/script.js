// Inicio de sesion
const loginForm = document.getElementById('log-in-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const response = await fetch('http://127.0.0.1:8000/users/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',  // Necesario para cookies/CSRF (si usas sesiones)
        body: JSON.stringify({
            username: document.getElementById('username_login').value,
            password: document.getElementById('password_login').value,
        }),
    });

    const data = await response.json();
    
    if (response.ok) {
        alert(data.message);
        // Redirigir o guardar token
    } else {
        alert(data.error);
    }
});