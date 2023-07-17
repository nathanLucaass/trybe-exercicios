const express = require('express');
const app = express();

app.use(express.json());

const getMovies = require('./data');

app.listen(3001, () => console.log('server running on port 3001'));

app.get('/movies', async (req, res) => {
  const movies = await getMovies();
  res.send(movies);
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await getMovies();
  const selectedMovie = movies.filter((movie) => movie.id === Number(id));
  res.status(200).json(selectedMovie);
});

app.post('/movies', async (req, res) => {
  const { id, movie, price } = req.body;
  const movies = await getMovies();
  const newMovie = {
    id,
    movie,
    price,
  };
  movies.push(newMovie);
  console.log(movies);
  res.send('Created');
});
