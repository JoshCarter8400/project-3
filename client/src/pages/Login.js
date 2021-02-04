import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Divider,
} from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [loginUser, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center" dividing>
          <Image src="\logo512.png" /> Log-in to your account
        </Header>
        <Form onSubmit={handleFormSubmit} size="large">
          <Segment color="blue" inverted>
            <Form.Input
              fluid
              icon="user"
              type="text"
              iconPosition="left"
              placeholder="E-mail address"
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

            {error ? (
              <Divider>
                <p>You have provided incorrect credentials</p>
              </Divider>
            ) : null}

            <Button color="teal" fluid size="large">
              Login
            </Button>
            <Segment color="blue" inverted>
              <Button animated="fade" fluid size="large">
                <Button.Content visible>New to us?</Button.Content>
                <Button.Content hidden>Sign Up!</Button.Content>
              </Button>
            </Segment>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
