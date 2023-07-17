const app = require('./app');
const getMovies = require('./data');

app.listen(3001, () => console.log('server running on port 3001'));

app.get('/movies', async (req, res) => {
  const { id } = req.params;
  let movies = await require('./data')
  res.send(movies)
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await getMovies();
  const selectedMovie = movies.filter((movie) => movie.id === Number(id));
  res.json(selectedMovie);
});