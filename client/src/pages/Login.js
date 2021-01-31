import React from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <div>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center" dividing>
          <Image src="\logo512.png" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment color="blue" inverted>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
            <Segment color="blue" inverted>
              <Button
                animated="fade"
                as={Link}
                
                to="/signup"
                fluid
                size="large"
              >
                <Button.Content visible>New to us?</Button.Content>
                <Button.Content hidden>Sign Up!</Button.Content>
              </Button>
            </Segment>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
