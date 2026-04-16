let RRating = 0;

// Handle star clicks
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function() {
        RRating = this.getAttribute("data-value");
        updateStars(RRating);
    });
});

function updateStars(RRating) {
    document.querySelectorAll(".star").forEach(star => {
        star.classList.remove("star-selected");
        if (star.getAttribute("data-value") <= RRating) {
            star.classList.add("star-selected");
        }
    });
}

//adds movie by getting the values from the form and putting them in an object, then putthing them in local storage
document.getElementById('moviestuff').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const t = document.getElementById('title').value;
    const g = document.getElementById('genre').value;
    const r = RRating;
    const movie = {title: t, genre: g, rating: r};
    
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    //replace already existing movies by checking if they have the same by checking if there is any matches to the movie title, which then replaces it with new values, but if it doesnt find a match, aka it doesnt find an index number it will js add a new movie thingy.
    const movie2 = movies.findIndex(m => m.title === movie.title);
    let a = 1;
    if (movie2 >= 0) {
        movies[movie2] = movie; 
    } else {
        movies.push(movie);
    }
    
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
});

function displayMovies() {
    const ratedMoviesDiv = document.getElementById('rated-movies');
    ratedMoviesDiv.innerHTML = '';
    
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    //this displays
    movies.forEach(movie => {
        let moviediv = document.createElement('div');
        moviediv.innerHTML = `<h3>${movie.title}</h3><p>Genre: ${movie.genre}</p><p>Rating: ${movie.rating} stars</p> <button class="deletebtn submitbutton" dataindex="${movies.indexOf(movie)}">Delete product</button>`;
        ratedMoviesDiv.appendChild(moviediv);
    });
    //delete
    document.querySelectorAll('.deletebtn').forEach(button => {
        button.addEventListener('click', function() {
            let y = confirm('Are you sure you want to delete this product?');
            if (!y) return;
            if (y) {
                let x = parseInt(this.getAttribute('dataindex'));
                movies.splice(x, 1);
                localStorage.setItem('movies', JSON.stringify(movies));
                displayMovies();
            }
        });
    });
}

displayMovies();

// Homepage button
document.querySelector('.homepage').onclick = function() {
    window.location.href = 'index.html';
};

// Merchandise button
document.querySelector('.merchandisebutton').onclick = function() {
    window.location.href = 'merchandise.html';
};

// Stat-lines button
document.querySelector('.statlinesbutton').onclick = function() {
    window.location.href = 'stat-lines.html';
};

// NBA Legacy button
document.querySelector('.legacybutton').onclick = function() {
    window.location.href = 'legacy.html';
};

// Biography button
document.querySelector('.biographybutton').onclick = function() {
    window.location.href = 'biography.html';
};

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