import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox,
  Label,
} from 'semantic-ui-react';

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [addUSer] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUSer({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });

    const token = mutationResponse.data.addUSer.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center" dividing>
            <Image src="\logo512.png" /> Register your account
          </Header>
          <Form onSubmit={handleFormSubmit} size="large">
            <Segment color="blue" inverted>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />

              <Button as={Link} to="/" color="teal" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            <Checkbox label="I agree to the" />{' '}
            <Label as={Link} to="/termsAndConditions">Terms and Conditions</Label>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SignUpForm;
