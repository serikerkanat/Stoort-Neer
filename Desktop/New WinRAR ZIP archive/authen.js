const usersDatabase = [];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;

    if (usersDatabase.includes(username)) {
        showMessage(`Welcome back, ${username}!`, 'success');
        localStorage.setItem('username', username); 
        document.getElementById('login-username').value = ''; 
        setTimeout(() => {
            window.location.href = 'appropriate name with extension.html'; 
        }, 2000); 
    } else {
        showMessage('User not found. Please register.', 'warning');
        document.getElementById('register-container').style.display = 'block';
        document.getElementById('register-username').value = username; 
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('register-username').value;

    if (!usersDatabase.includes(newUsername)) {
        usersDatabase.push(newUsername);
        showMessage(`User ${newUsername} successfully registered! Please log in.`, 'success');
        localStorage.setItem('username', newUsername); 
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-username').value = newUsername; 
        document.getElementById('register-username').value = ''; 
    } else {
        showMessage('User already exists. Try logging in.', 'warning');
    }
});

function showMessage(message, type) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.className = `alert alert-${type} text-center mb-4`;
    messageBox.style.display = 'block';

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}
