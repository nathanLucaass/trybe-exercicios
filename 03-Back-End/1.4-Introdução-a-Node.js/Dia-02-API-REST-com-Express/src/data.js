const fs = require('fs').promises;

const getMovies = async () =>{
  const movies = await fs.readFile('src/movies.json', 'utf-8');
  return JSON.parse(movies)
}

module.exports = getMovies;