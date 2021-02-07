import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_REVIEW } from "../../utils/mutations";
import { Form, Icon, Segment, Image, Header, Container } from "semantic-ui-react";

const ReviewForm = () => {
  const [reviewText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addReview, { error }] = useMutation(ADD_REVIEW);

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
    <Container text>
      <Segment compact>
        <Segment inverted color="blue" textAlign="center">
          <Header
            textAlign="center"
            as="h1"
            style={{ margin: "0.25em 0em", fontSize: "3em" }}
          >
            Your opinion matters to us, leave a review!
          </Header>
          <Image src="\images\customer-support.jpg" centered fluid />
        </Segment>

        

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
