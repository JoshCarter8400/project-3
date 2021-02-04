import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_REVIEW } from "../../utils/mutations";
import { QUERY_REVIEWS, QUERY_ME } from "../../utils/queries";
import { Form, Icon, Segment, Image, Header, Container } from "semantic-ui-react";

const ReviewForm = () => {
  const [reviewText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        // read what's currently in the cache  // could potentially not exist yet, so wrap in a try...catch
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

        // prepend the newest thought to the front of the array
        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }
      // update me object's cache, appending new thought to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, reviews: [...me.reviews, addReview] } },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 300) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add review to database
      await addReview({
        variables: { reviewText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Container>
      <Segment compact>
        <Segment inverted color="blue" textAlign="center" vertical>
          <Header
            textAlign="center"
            as="h1"
            style={{ margin: "0.25em 0em", fontSize: "3em" }}
          >
            Your opinion matters to us, leave a review!
          </Header>
        </Segment>

        <Image src="\images\customer-support.jpg" centered fluid />

        <Form onSubmit={handleFormSubmit}>
          <Form.TextArea
            label="Review"
            placeholder="Please add your review here"
            value={reviewText}
            onChange={handleChange}
          />
          <p className={`m-0 ${characterCount === 300 ? "text-error" : ""}`}>
            Character count: {characterCount}/300
            {error && <span className="ml-2">Something Went Wrong...</span>}
          </p>

          <Form.Button primary size="medium">
            Submit
            <Icon name="right arrow" />
          </Form.Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default ReviewForm;
