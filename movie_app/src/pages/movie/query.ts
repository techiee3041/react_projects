export const fetchMovieData = async (movieid: string) => {
    // getting data from the api
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhhZTYwOWE4OGQ3MjEwOTQ4YTY0NTc1MzgwNWYxZSIsInN1YiI6IjY1YzdhOThjYTMxNDQwMDE4NjhkZjAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cPfOUV5jmfqXsVLstS8D9_z1Ht8GZ9jsvQ5YzyeHC-s'
        }
    });
    return response.json();
}