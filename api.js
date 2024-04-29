const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1ZTkyYjA0ZWVkZmU0OGIyYWJkM2MwMjg2ZTMxZSIsInN1YiI6IjY2MmI1ZjYzOTVjZTI0MDEyMDYwZjJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6A7MS_tFkhTP4dbNaA5lUy8TJEkG8lkQDAaYrMmtLjY'
    }
  };
  
  const main = document.getElementById('main');
  title overview poster_path vote_average

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));