function clear(){
    Start1.innerHTML = "";
    Start2.innerHTML = "";
    Start3.innerHTML = "";
    Start4.innerHTML = "";
}

document.getElementById("s1").addEventListener("click",function() {
    clear();
    Start1.innerHTML = "Kobe Bryant, drafted by the Hornets on June 26 1996. Kobe was a versatile player who was used to playing basically all positions because of his highschool career. Scouts said that he was the type of player who could get shots off from anywhere, and his basketball IQ was off the charts. After being drafted to the Hornets, he was traded immediately to the Los Angeles Lakers(craziest fumble oat). He was just 17 entering the league, and he averaged 7.6 points per game. He won the Dunk contest in 1997, and by his second season, he suddenly turned into an NBA Allstar while averaging 15 ppg.";
});

document.getElementById("s2").addEventListener("click",function() {
    clear();
    Start2.innerHTML = "Kobe won three consecutive championships, 2000, 2001, 2002, with the help of the Shaquile O'Neal. During 2003, he averaged 30ppg. During 2004, they went to the championships again, but lost against the Pistons. Shaq gets traded to the Miami Heat, leaving Kobe alone without his iconic duo. Kobe scored the second highest points in a game with 81 points against the Toronto Raptors, which was a crazy feat. During the 2008 era, they Lakers built around Kobe, using players like Pau Gasol, which helped them reach the championship stage once again. They lose to the Celtics in 2008, beat the Magic in 2009, and beat the Celtics in 2010. Kobe was finals MVP during the 2009 and 2010 championships.";
});

document.getElementById("s3").addEventListener("click",function() {
    clear();
    Start3.innerHTML = "Kobe got injured in 2013, got knee injuries, tore his rotator cuff, which led him to miss a lot of time. 2015-2016, was Kobe's fairwell tour, because he himself had announced that he would retire during those years. The Lakers finished 17-65(pretty bad), but it was a decent fairwell tour season.";
});

document.getElementById("s4").addEventListener("click",function() {
    clear();
    Start4.innerHTML = "Kobe had one of the most Iconic retirement games of all time. He was against the Utah Jazz, and he scored 60 points. The lakers won 101-96, and this game marked the end of an era, the end of Kobe's career.";
});

document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    const savedJersey = localStorage.getItem('jersey');
    
    const displayName = savedUsername || 'GUEST';
    const displayNumber = savedJersey || '67';
    
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
    
    const header = document.querySelector('.header');
    if (header) {
        header.appendChild(jerseyDiv);
    }
});

window.onload = function() {
    const buttons = document.querySelectorAll(".nav-button");
    
    if (buttons.length > 0) {
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
            window.location.href = "index.html";
        });
    }
};