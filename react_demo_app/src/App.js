import { useState, useEffect } from "react";
// c032e2d7
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('spiderman')
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movie found</h2>
            </div>
          )
      }

    </div >
  )
}

export default App
