import { useState } from "react";
import { Button } from "semantic-ui-react";
import ColumnDisplay from "./ColumnDisplay";
import { fetchMovies, fetchTvShows } from "./query";
import { useQuery } from "@tanstack/react-query";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}
const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovieData } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovies,
  });

  const { data: tvShowData, isLoading: isLoadingTvShowData } = useQuery({
    queryKey: ["tvShow"],
    queryFn: fetchTvShows,
  });
  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      {/* holds two buttons for the movies and tv shows */}
      <Button.Group>
        <Button
          color={displayType === DisplayType.Movies ? "red" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => {
            setDisplayType(DisplayType.TvShows);
          }}
        >
          TvShows
        </Button>
      </Button.Group>

      {/* displayin popular movies and tvshows */}
      {isLoadingMovieData || isLoadingTvShowData ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay data={movieData.results} displayType={DisplayType.Movies} />
          ) : (
            <ColumnDisplay data={tvShowData.results} displayType={DisplayType.TvShows} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
