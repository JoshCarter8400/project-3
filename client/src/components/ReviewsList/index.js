import React from 'react';
import { Card, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const ReviewsList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <Header as="h2">No one has left a review yet</Header>;
  }

  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as="h3" style={{ fontSize: '1em' }}>
              {title}
            </Header>
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
