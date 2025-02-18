import "./MovieCard.css"

// Movie Card displays a movie poster, title, and release date
export default function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("Favorite Clicked")
        console.log("Favorite Clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-heart">
                    <button className="fav-btn" onClick={onFavoriteClick}>
                    ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}