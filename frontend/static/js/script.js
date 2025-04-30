// Inicio de sesion
let user_info = [];
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
            user_info = data.user;
            updateUserIcon(user_info);
            window.location.href = 'index.html'
            // Redirigir o guardar token
        } else {
            alert(data.error);
        }
    });
}

function updateUserIcon(user) {
    const userIcon = document.getElementById('user-icon');
    const userContainer = document.getElementById('user__container');
    const loginOption = document.getElementById('log-in');
    const logoutOption = document.getElementById('log-out');
    const userSettings = document.getElementById('user-settings');
    const dropDivider = document.getElementById('drop-divider');

    if (user_info.length !== 0) {
        userIcon.style.display = 'none';
        userContainer.style.display = 'flex';
        userContainer.textContent = user.first_name[0];
        loginOption.style.display = 'none';
        logoutOption.style.display = 'block';
        userSettings.style.display = 'block';
        dropDivider.style.display = 'block';
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const savedUser = JSON.parse(localStorage.getItem('userData'))?.user;
    if (savedUser) {
        user_info = savedUser;
        updateUserIcon(user_info);
    }
});

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
                alert('Error al crear usuario!', data.status)
            }
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    
    })
}

// Cerrar sesion
async function log_out() {
    try {
        const response = await fetch('http://127.0.0.1:8000/users/log_out/', {
            method: 'POST',
            credentials: 'include',  // Envía cookies automáticamente
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

// Obtener catalogo de juesgos
let nintendoGamesCatalog = []
async function getNintendoGames() {
    try {
        const response = await fetch('http://127.0.0.1:8000/catalog/games/1/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();

        if (response.ok) {
            nintendoGamesCatalog = data;
            showCatalog(nintendoGamesCatalog);
        } else {
            alert(data.error)
        }
    } catch (e) {
        console.log(e)
    }
}

function showCatalog(catalog){
    const gridCatalogContainer = document.getElementById('grid-catalog__container');
    console.log(typeof(catalog))
    catalog.forEach(game => {
        const card = `
            <div class="col">
                <div class="card" style="width: 18rem;" id="${game.id}">
                    <img src="../../ecommerce/media${game.game_image}" class="card-img-top game-img" alt="${game.game_name}">
                    <div class="card-body">
                    <div class="content">
                        <h5 class="card-title">${game.game_name}</h5>
                        <p class="card-text">${game.description}</p>
                        <h6>$${game.price}</h6>
                        <form action="" method="post">
                        <input type="hidden" value="" name="product">
                        <button class="btn btn-primary btn-cart">
                            Add to cart
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        `
        gridCatalogContainer.innerHTML += card;
    });
}