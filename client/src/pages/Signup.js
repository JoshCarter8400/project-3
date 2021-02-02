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
import 'semantic-ui-css/semantic.min.css';

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        username: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
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
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
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
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />

            <Button type="submit" color="teal" fluid size="large">Sign Up</Button>
          </Segment>
        </Form>
        {error && <Segment>Sign Up Failed</Segment>}
        <Message>
          <Checkbox label="I agree to the" />{' '}
          <Label as={Link} to="/termsAndConditions">Terms and Conditions</Label>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUpForm;
