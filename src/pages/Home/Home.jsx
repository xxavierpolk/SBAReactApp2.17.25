import MovieCard from '../../components/MovieCard/MovieCard.jsx';
import { useState, useEffect } from 'react';
import { fetchPopMovies, searchMovies } from '../../services/api.js';
import './Home.css';


export default function Home() {

    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([]);
    
 



    useEffect(() => {
        async function loadPopMovies() {
            try {
                const popMovies = await fetchPopMovies();
                setMovies(popMovies);
            } catch (error) {
                console.log(error)
            } 
        }

        loadPopMovies();
    }, [movies]);

    const handleSearch = (e) => {
        e.preventDefault()
        alert("Search Clicked")
        setSearchMovie("")
    };


    return (
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text"     
                    placeholder="Search for a movie..." className='search-input' 
                    value={searchMovie} 
                    onChange={(e) => setSearchMovie(e.target.value)} />
                <button type="submit" className='search-btn'>Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
};
