const user = localStorage.getItem('demoUser');

document.getElementById('user').innerText = user ? Hello, ${user} 😈 : '';

function logout() {
localStorage.clear();
window.location.href = 'index.html';
}
