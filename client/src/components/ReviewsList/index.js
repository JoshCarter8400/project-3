import React from "react";
import {
  Card,
  Grid,
  Header,
  Segment,
  Label,
  Image,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_REVIEWS } from "../../utils/queries";

import "semantic-ui-css/semantic.min.css";

const ReviewsList = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);

  const reviews = data?.reviews || {};

  if (loading) {
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        </Segment>
      </div>
    );
  }

  if (!reviews) {
    return <Header as="h2">No one has left a review yet</Header>;
  }

  return (
    <Container text>
      <Segment compact>
        <Segment inverted color="blue">
          <Header
            textAlign="center"
            as="h1"
            style={{ margin: "0.25em 0em", fontSize: "3em" }}
          >
            Reviews
          </Header>
          <Image src="\images\review.jpg" centered fluid />
        </Segment>

        
        <br />
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={10}>
              {reviews &&
                reviews.map((review) => (
                  <Segment key={review._id}>
                    <Card.Content>
                      <Card.Header>
                        <Header as="h4">
                          <Label
                            as={Link}
                            to={`/profile/${review.username}`}
                            style={{ fontWeight: 600 }}
                          >
                            {review.username}
                          </Label>
                          <Link to={`/profile/${review.username}`}></Link>
                          on {review.createdAt}
                        </Header>
                      </Card.Header>
                      <Card.Description>
                        <p>{review.reviewText}</p>
                      </Card.Description>
                    </Card.Content>
                  </Segment>
                ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default ReviewsList;
