document.addEventListener('DOMContentLoaded', function() {
    // ===== BUTTON CLICK HANDLERS =====
    const buttons = document.querySelectorAll(".nav-button");
    
    if (buttons.length >= 5) {
        buttons[0].addEventListener("click", () => {
            window.location.href = "merchandise.html";
        });
        
        buttons[1].addEventListener("click", () => {
            window.location.href = "biography.html";
        });
        
        buttons[2].addEventListener("click", () => {
            window.location.href = "stat-lines.html";
        });
        
        buttons[3].addEventListener("click", () => {
            window.location.href = "legacy.html";
        });
        
        buttons[4].addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
    
    // ===== JERSEY DISPLAY =====
    // Get saved data from signup page
    const savedUsername = localStorage.getItem('username');
    const savedJersey = localStorage.getItem('jersey');
    
    // Set default values if nothing saved
    const displayName = savedUsername || 'GUEST';
    const displayNumber = savedJersey || '67';
    
    // Create the jersey element
    const jerseyDiv = document.createElement('div');
    jerseyDiv.style.cssText = `
        position: absolute;
        top: 50%;
        right: 120px;
        transform: translateY(-50%);
        background: rgb(245, 191, 28);
        color: rgb(104, 35, 121);
        padding: 8px 15px;
        border-radius: 30px;
        font-weight: bold;
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 2px solid white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 300;
    `;
    
    jerseyDiv.innerHTML = `
        <span style="font-size: 24px;">🏀</span>
        <span style="border-right: 2px solid black; padding-right: 10px;">${displayName}</span>
        <span style="font-weight: 900; font-size: 22px;">#${displayNumber}</span>
    `;
    
    // Add to header
    const header = document.querySelector('.header');
    if (header) {
        header.appendChild(jerseyDiv);
    }
});