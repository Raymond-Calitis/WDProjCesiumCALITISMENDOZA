
    function clear(){
                Gtart1.innerHTML = "";
                Gtart2.innerHTML = "";
                Ktart1.innerHTML = "";
                Ktart2.innerHTML = "";
                
            }
            
      document.getElementById("g1").addEventListener("click",function() {
                clear();
                Gtart1.innerHTML = "Kobe grinches, known for its green colorway, amazing traction, and an overall comfortable design. This shoe is known for its supreme performance and its a must have for any basketball player who wants the best of the best.";
            });
            document.getElementById("g2").addEventListener("click",function() {
                clear();
                Gtart2.innerHTML = "Buy Kobe Grinches here: https://stockx.com/nike-kobe-6-protro-grinch?msockid=039055529ec56fbd1579404f9fd16ead";
            });
            document.getElementById("k1").addEventListener("click",function() {
                clear();
                Ktart1.innerHTML = "Kobe protos, known for its amazing traction and dominant performance. It is collection of Kobe's best shoes ever made, its durable, reliable, and a good investment.";
            });
            document.getElementById("k2").addEventListener("click",function() {
                clear();
                Ktart2.innerHTML = "Buy Kobe Protos. Available here: https://stockx.com/search?s=kobe+protos";
            });

document.addEventListener('DOMContentLoaded', function() {
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
        color: black;
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
        color: rgb(104, 35, 121);
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
