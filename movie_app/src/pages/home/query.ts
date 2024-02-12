export const fetchMovies = async () => {
    // getting data from the api
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhhZTYwOWE4OGQ3MjEwOTQ4YTY0NTc1MzgwNWYxZSIsInN1YiI6IjY1YzdhOThjYTMxNDQwMDE4NjhkZjAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cPfOUV5jmfqXsVLstS8D9_z1Ht8GZ9jsvQ5YzyeHC-s'
        }
    });
    return response.json();
}

export const fetchTvShows = async () => {
    // getting tvShows data from api endpoint
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhhZTYwOWE4OGQ3MjEwOTQ4YTY0NTc1MzgwNWYxZSIsInN1YiI6IjY1YzdhOThjYTMxNDQwMDE4NjhkZjAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cPfOUV5jmfqXsVLstS8D9_z1Ht8GZ9jsvQ5YzyeHC-s'
        }
    });
    return response.json();
}