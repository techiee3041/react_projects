export const mutationLogin = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhhZTYwOWE4OGQ3MjEwOTQ4YTY0NTc1MzgwNWYxZSIsInN1YiI6IjY1YzdhOThjYTMxNDQwMDE4NjhkZjAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cPfOUV5jmfqXsVLstS8D9_z1Ht8GZ9jsvQ5YzyeHC-s",
        },
      }
    );
  
    const data = await response.json();
    console.log(data);
    return data;
  };