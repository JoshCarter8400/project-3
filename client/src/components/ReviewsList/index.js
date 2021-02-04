import React from 'react';
import { Card, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_REVIEWS } from '../../utils/queries';

import 'semantic-ui-css/semantic.min.css';

const ReviewsList = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);

  const reviews = data?.reviews || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!reviews) {
    return <Header as="h2">No one has left a review yet</Header>;
  }

  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {reviews &&
              reviews.map((review) => (
                <Card.Content key={review._id}>
                  <Card.Header>
                    <Link
                      to={`/profile/${review.username}`}
                      style={{ fontWeight: 600 }}
                    >
                      {review.username}
                    </Link>
                    review on {review.createdAt}
                  </Card.Header>
                  <Card.Description>
                    <p>{review.reviewText}</p>
                  </Card.Description>
                </Card.Content>
              ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ReviewsList;
