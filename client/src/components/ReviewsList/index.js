import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const ReviewsList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h2>No one has left a review yet</h2>;
  }

  return (
    <Card>
      <div>
        <h2>{title}</h2>
        {reviews &&
          reviews.map((review) => (
            <div key={review._id}>
              <p>
                <Link
                  to={`/profile/${review.username}`}
                  style={{ fontWeight: 600 }}
                >
                  {review.username}
                </Link>
                review on {review.createdAt}
              </p>
              <div>
                <p>{review.reviewText}</p>
              </div>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default ReviewsList;
