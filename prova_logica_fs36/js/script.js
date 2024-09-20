function fazerLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@gmail.com' && password === 'admin@123') {
        window.location.href += 'pages/home';
    } else {
        alert('Email ou senha incorretos.');
    }
}

localStorage.setItem('id','0');