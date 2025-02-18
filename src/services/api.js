//  const apiKey = process.env.API_KEY;
const apiKey = "cd7a3f9decd8bca469fc1456dba1465a";
 const BASE_URL = 'https://api.themoviedb.org/3';

 export async function fetchPopMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`)
    const data = await response.json()
    return data.results;
 };

 export async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    )
    const data = await response.json()
    return data.results;
 };
