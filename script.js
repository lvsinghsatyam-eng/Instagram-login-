document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault();

const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();
const error = document.getElementById('errorMsg');

error.textContent = '';

if (username === '' || password === '') {
error.textContent = 'Please fill all fields';
return;
}

if (password.length < 6) {
error.textContent = 'Password must be at least 6 characters';
return;
}

// Simulated success login
localStorage.setItem('demoUser', username);
window.location.href = 'joker.html';
});
