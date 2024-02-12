import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Grid, Header, Image, Label, List, Loader, Segment } from "semantic-ui-react";
import { fetchMovieData } from "./query";

const Movie = () => {
  const { id } = useParams<string>();

  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => (id ? fetchMovieData(id) : null), // Add a conditional check
  });

  if (isLoading) {
    return <Loader active />;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Segment>
        <Header>{data.title}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  size="medium"
                  centered
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
                <List>
                    <List.Item>
                        <List.Header>Is the Movie for Adults: </List.Header>
                        {data.adult ? 'yes' : 'no'}
                    </List.Item>
                    <List.Item>
                        <List.Header>Budget: </List.Header>
                        {data.budget}
                    </List.Item>
                    <List.Item>
                       <List.Header>Generes: </List.Header>
                        {data.genres?.map((genre: any) => {
                            return (<Label key={genre.id}>{genre.name}</Label>)
                        })}
                    </List.Item> 
                    <List.Item>
                        <List.Header>IMDB Id: </List.Header>
                        {data.imdb_id}
                    </List.Item>
                    <List.Item>
                        <List.Header>Popularity: </List.Header>
                        {data.popularity}
                    </List.Item>
                    <List.Item>
                        <List.Header>Production Companies: </List.Header>
                        {data.production_companies?.map((company: any) => company.name).join(", ")}
                    </List.Item>
                    <List.Item>
                        <List.Header>Release Date: </List.Header>
                        {data.release_date}
                    </List.Item>
                    <List.Item>
                        <List.Header>Runtime: </List.Header>
                        {data.runtime}
                    </List.Item>
                    <List.Item>
                        <List.Header>Revenue: </List.Header>
                        {data.revenue}
                    </List.Item>
                    <List.Item>
                        <List.Header>Vote Average: </List.Header>
                        {data.vote_average}
                    </List.Item>
                    <List.Item>
                        <List.Header>Language: </List.Header>
                        {data.original_language}
                    </List.Item>
                </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Movie;
