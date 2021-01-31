import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_REVIEW } from '../utils/queries';
import ReviewForm from '../components/ReviewForm';
import Auth from '../utils/auth';
import { Card, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SingleReview = () => {
  const { id: reviewId } = useParams();
  const { loading, data } = useQuery(QUERY_REVIEW, {
    variables: { id: reviewId },
  });

  const review = data?.review || {};

  if (loading) {
    return <Segment>Loading...</Segment>;
  }

  return (
    <Segment>
      <Card>
        <Card.Content>
          <Card.Header>
            <span style={{ fontWeight: 600 }}>{review.username}</span>
            review made on {review.createdAt}
          </Card.Header>
          <Card.Description>
            <p>{review.reviewText}</p>
          </Card.Description>
        </Card.Content>
      </Card>
      {Auth.loggedIn() && <ReviewForm reviewId={review._id} />}
    </Segment>
  );
};

export default SingleReview;
