const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1ZTkyYjA0ZWVkZmU0OGIyYWJkM2MwMjg2ZTMxZSIsInN1YiI6IjY2MmI1ZjYzOTVjZTI0MDEyMDYwZjJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6A7MS_tFkhTP4dbNaA5lUy8TJEkG8lkQDAaYrMmtLjY'
    }
};

const moviesContainer = document.getElementById("main");

const moviecard = movie => {
    const { title, overview, poster_path, vote_average } = movie;
    const card = document.createElement('div');
    const image = document.createElement('img');
    const titleElement = document.createElement('h2');
    const overvieElement = document.createElement('p');
    const voteAverageElement = document.createElement('p');

    card.className = 'movie-card';
    image.className = 'poster-image';
    titleElement.className = 'title';
    overvieElement.className = 'overview';
    voteAverageElement.className = 'vote-average';

    image.src = `https://image.tmdb.org/t/p/w55${poster_path}`;

    titleElement.textContent = title;
    overvieElement.textContent = overview;
    voteAverageElement.textContent = `영화 평점: ${vote_average}`;

    card.appendChild(image);
    card.appendChild(titleElement);
    card.appendChild(overvieElement);
    card.appendChild(voteAverageElement);

    return card;
};



fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const renderMovies = movies => {
        movies.forEach(movie => {
            const movieCard = moviecard(movie);
            moviesContainer.appendChild(movieCard);
        });
    };