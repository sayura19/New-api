import fs from 'fs';
import express from 'express';
const app = express();

const movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movie/:id', (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (movie) return res.json(movie);
  res.status(404).json({ error: 'Movie not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
