"use client"
export const rateMovie = async (movieId: number, rating: number) => {
    const storage:string | null = localStorage.getItem(
        "guest_session_id"
      ) || null;
  // getting data from the api
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/${rating}?guest_session_id=${storage}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
        method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{'value': ${rating}}`
    }
  );
  const data = await response.json();
  return data;
};

export const rateTvShow = async (series_id: number, rating: number) => {
    const storage: string | null  = localStorage.getItem(
        "guest_session_id"
      );
  // getting tvShows data from api endpoint
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${series_id}/${rating}?guest_session_id=${storage}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
        method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{'value': ${rating}}`
    }
  );
  return response.json();
};
