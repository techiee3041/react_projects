"use client"
import { Card, Grid, Form } from "semantic-ui-react";
import { DisplayType } from ".";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}
const ColumnDisplay = (props: Props) => {
  const { data, displayType } = props;

  const [rating, setRating] = useState(0);

  //mutate movies
  const { mutate: rateMovieMutation } = useMutation({
    mutationKey: ["rating"],
    mutationFn: (id: number) => rateMovie(id, rating),
  });

  //mutate tv shows
  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["rating"],
    mutationFn: (id: number) => rateTvShow(id, rating),
  });

  const rate =
    displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;
  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data?.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`/${
                displayType === DisplayType.Movies ? "movies" : "tvshow"
              }/${displayData.id}`}
            >
              <Card
                fluid
                image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                header={
                  displayType === DisplayType.Movies
                    ? displayData.title
                    : displayData.name
                }
                meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}
                description={`${displayData.overview.slice(0, 350)}...`}
              />
            </Link>
            <Form style={{ marginTop: 10 }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    onChange={(e) => setRating(Number(e.target.value))}
                    action={{
                      color: "green",
                      labelPosition: "right",
                      icon: "star",
                      content: "rate",
                      onClick: () => rate(displayData.id),
                    }}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default ColumnDisplay;
