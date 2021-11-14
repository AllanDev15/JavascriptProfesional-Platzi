const apiKey = 'b89fc45c2067cbd33560270639722eae';

async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  // return fetch(url).then((response) => response.json());
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
  // return fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => data.results);

  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function getTopMoviesIds(n = 3) {
  // return getPopularMovies().then((popularMovies) => popularMovies.slice(0, n).map((movie) => movie.id));
  const popularMovies = await getPopularMovies();
  const ids = popularMovies.slice(0, n).map((movie) => movie.id);
  return ids;
}

function renderMovies(movies) {
  const movieList = document.querySelector('#movies');
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
      <h5>${movie.title}</h5>
      <p>Released on <em>${movie.release_date}</em></p>
    `;

    movieList.appendChild(listItem);
  });
}

async function getTopMoviesInSequence() {
  const ids = await getTopMoviesIds();
  const movies = [];

  for (const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }
  return movies;
}

async function getTopMoviesInParallel() {
  const ids = await getTopMoviesIds();
  const moviePromise = ids.map((id) => getMovie(id));

  const movies = await Promise.all(moviePromise);
  return movies;
}

async function getFastestTopMovie() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovie(id));
  const movie = await Promise.race(moviePromises);
  return movie;
}

document.querySelector('#sequence').onclick = async function () {
  const movies = await getTopMoviesInSequence();
  renderMovies(movies);
};

document.querySelector('#parallel').onclick = async function () {
  const movies = await getTopMoviesInParallel();
  renderMovies(movies);
};

document.querySelector('#fastest').onclick = async function () {
  const movie = await getFastestTopMovie();
  renderMovies([movie]);
};
