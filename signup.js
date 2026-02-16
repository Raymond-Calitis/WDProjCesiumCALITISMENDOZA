document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const jerseyInput = document.getElementById('jersey');
    const saveBtn = document.getElementById('saveBtn');
    const savedDiv = document.getElementById('savedData');
    const displayUsername = document.getElementById('displayUsername');
    const displayJersey = document.getElementById('displayJersey');
    
    const savedUsername = localStorage.getItem('username');
    const savedJersey = localStorage.getItem('jersey');
    
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    
    if (savedJersey) {
        jerseyInput.value = savedJersey;
    }
    
    if (savedUsername && savedJersey) {
        displayUsername.textContent = `Username: ${savedUsername}`;
        displayJersey.textContent = `Jersey #: ${savedJersey}`;
        savedDiv.classList.add('show');
    }
    
    saveBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        const jersey = jerseyInput.value.trim();
        
        if (username && jersey) {
            localStorage.setItem('username', username);
            localStorage.setItem('jersey', jersey);
            
            displayUsername.textContent = `Username: ${username}`;
            displayJersey.textContent = `Jersey #: ${jersey}`;
            savedDiv.classList.add('show');
            
            alert('Data saved successfully!');
        } else {
            alert('Please fill in both fields');
        }
    });
});